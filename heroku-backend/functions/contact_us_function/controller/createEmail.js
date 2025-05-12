const sendEmail = require('../utils/sendEmail');
const twilio = require('twilio');
const dotenv = require('dotenv');
const pool = require('../../../db/db');
dotenv.config();

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
const businessPhone = '+19729799004';
const businessEmail = 'eclipsepoolservice@gmail.com';
const userId = 670;

exports.createEmail = async (req, res) => {
    const { name, email, message = '', phone, address = '' } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ error: 'Name, email, and phone are required.' });
    }

    // ✅ Sanitize phone number
    let sanitizedPhone = phone.replace(/\D/g, '');
    if (sanitizedPhone.length === 10) {
        sanitizedPhone = '+1' + sanitizedPhone;
    } else if (!sanitizedPhone.startsWith('+')) {
        sanitizedPhone = '+' + sanitizedPhone;
    }

    try {
        const subject = `📬 New Contact Submission from ${name}`;
        const htmlContent = `
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${sanitizedPhone}</p>
            <p><strong>Address:</strong> ${address || 'N/A'}</p>
            <p><strong>Message:</strong><br>${message || 'N/A'}</p>
        `;

        // ✅ Send email
        await sendEmail(businessEmail, subject, htmlContent);

        // ✅ Text customer
        await client.messages.create({
            body: `Hi ${name}, thanks for contacting Clearly #1 Pool Service! We’ll reach out shortly.`,
            messagingServiceSid: process.env.TWILIO_MESSAGING_SID,
            to: sanitizedPhone
        });

        // ✅ Text business
        await client.messages.create({
            body: `📬 Hi Sandy, Your CRM is updated with a New contact from ${name}\n📞 ${sanitizedPhone}\n📧 ${email}\n🏠 ${address}\n📩 ${message}`,
            messagingServiceSid: process.env.TWILIO_MESSAGING_SID,
            to: businessPhone
        });

        // ✅ Check for existing subscriber for this user only
        const existing = await pool.query(
            `SELECT id FROM subscribers
             WHERE user_id = $1 AND (email = $2 OR phone_number = $3)`,
            [userId, email, sanitizedPhone]
        );

        if (existing.rows.length > 0) {
            await pool.query(
                `UPDATE subscribers
                 SET name = $1, email = $2, phone_number = $3, physical_address = $4, updated_at = NOW()
                 WHERE id = $5`,
                [name, email, sanitizedPhone, address, existing.rows[0].id]
            );
            console.log('🔄 Subscriber updated');
        } else {
            await pool.query(
                `INSERT INTO subscribers (user_id, name, email, phone_number, physical_address, created_at, updated_at)
                 VALUES ($1, $2, $3, $4, $5, NOW(), NOW())`,
                [userId, name, email, sanitizedPhone, address]
            );
            console.log('🆕 Subscriber inserted');
        }

        res.status(200).json({ success: true, message: 'Contact form processed successfully.' });

    } catch (err) {
        console.error('❌ Error in createEmail:', err);
        res.status(500).json({ error: 'Server error' });
    }
};
