import React, { useEffect } from 'react';

const ContactSection = () => {
    useEffect(() => {
        const form = document.getElementById('contact-form');
        const handleSubmit = async (event) => {
            event.preventDefault();

            const formData = {
                name: document.getElementById('cf-name')?.value,
                phone: document.getElementById('cf-number')?.value,
                email: document.getElementById('cf-email')?.value,
                message: document.getElementById('cf-message')?.value,
                address: document.getElementById('cf-address')?.value, // make sure this exists in your form
            };

            try {
                const response = await fetch('https://eclipse-pool-api-3bb6c1946b76.herokuapp.com/api/contactus', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    alert("Message sent successfully!");
                    form.reset();
                } else {
                    const errorData = await response.json();
                    alert("Error: " + (errorData.error || "Unknown error occurred"));
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("An error occurred. Please try again.");
            }
        };

        form?.addEventListener('submit', handleSubmit);
        return () => form?.removeEventListener('submit', handleSubmit); // cleanup
    }, []);


    return (
        <section id="contact" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Contact us</h2>
                            <span className="line-bar">...</span>
                        </div>
                    </div>

                    <div className="col-md-8 col-sm-8">
                        <form id="contact-form" role="form" action="#" method="post">
                            <div className="col-md-6 col-sm-6">
                                <input type="text" className="form-control" placeholder="Full Name" id="cf-name" name="cf-name" required />
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <input type="email" className="form-control" placeholder="Your Email" id="cf-email" name="cf-email" required />
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <input type="tel" className="form-control" placeholder="Your Phone" id="cf-number" name="cf-number" required />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <input type="text" className="form-control" placeholder="Your Address" id="cf-address" name="cf-address" />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <textarea className="form-control" rows="6" placeholder="Your requirements" id="cf-message" name="cf-message"></textarea>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <input type="submit" className="form-control" name="submit" value="Send Message" />
                            </div>
                        </form>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="google-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d482025.82130434026!2d-96.6989!3d33.0198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1736983429546&output=embed"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
