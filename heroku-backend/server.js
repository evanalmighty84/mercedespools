require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Contact Us Routes
try {
    const contactUsRoutes = require('./functions/contact_us_function');
    console.log('✅ contact_us_function loaded');
    app.use('/api/contactus', contactUsRoutes);
} catch (err) {
    console.error('❌ Error loading contact_us_function:', err);
}

// CRM Routes (main app)

    const crmRoutes = require('./functions/crm_function');
    console.log('✅ crm function loaded');
    app.use('/', crmRoutes); // All /api/ prefixed routes handled here


// Default Health Check
app.get('/', (req, res) => {
    res.send('✅ CRM API is running');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
