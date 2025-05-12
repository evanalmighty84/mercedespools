import React from 'react';

const testimonials = [
    {
        name: "Melissa R.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        review: "Eclipse Pool Service has kept our pool sparkling clean all year! Their team is reliable and always on time. Highly recommended for regular maintenance!",
    },
    {
        name: "Jason K.",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        review: "I've used several pool companies before, but Eclipse Pool Service is the best! They caught a small leak early and saved me from a huge repair later. Excellent service!",
    },
    {
        name: "Alyssa P.",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        review: "The weekly pool maintenance plan is worth every penny! Our water has never looked better. Friendly staff, and they always leave everything spotless.",
    },
];



const Testimonials = () => {
    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            padding: '40px 20px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '1200px',
            margin: 'auto'
        }}>
            <h2 style={{
                textAlign: 'center',
                color: '#333',
                fontFamily: 'Arial, sans-serif'
            }}>What Our Customers Say</h2>

            <div className="row justify-content-center" style={{ marginTop: '20px' }}>
                {testimonials.map((t, i) => (
                    <div key={i} className="col-md-4 col-sm-6" style={{ marginBottom: '20px' }}>
                        <div style={{
                            backgroundColor: 'white',
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            padding: '15px',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                        }}>
                            <img
                                src={t.image}
                                alt={`Reviewer ${i + 1}`}
                                style={{ borderRadius: '50%', marginBottom: '10px' }}
                            />
                            <h4 style={{ margin: 0, color: '#007bff' }}>{t.name}</h4>
                            <p style={{ fontSize: '14px', color: '#666' }}>{t.review}</p>
                            <div style={{ color: '#FFD700', fontSize: '18px' }}>★★★★★</div>
                        </div>
                    </div>
                ))}
            </div>

            <p style={{ textAlign: 'center', marginTop: '20px', color: '#555', fontSize: '14px' }}>
                <a href="https://g.co/kgs/9aikPZK" style={{ color: '#007bff', textDecoration: 'none' }}>
                    Read More Reviews on Google
                </a>
            </p>
        </div>
    );
};

export default Testimonials;
