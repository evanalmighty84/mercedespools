import React from 'react';
import reviewer1 from '../images/reviewer2.png';
import reviewer2 from '../images/reviewer3.png';
import reviewer3 from '../images/reviewer1.png';

const testimonials = [
    {
        name: "Di Nest",
        image: reviewer1,
        review: "I use Mercedes Pools for all my pool needs, including resurfacing and new coping and patio. I'm so in love with it! I cannot be more grateful and thankful for this company!",
    },
    {
        name: "Carson Everett",
        image: reviewer2,
        review: "My pool was in real need of updates, and Mercedes was able to work it into their schedule and achieve great results. Support small business and help the economy grow!",
    },
    {
        name: "Shelly Morgan",
        image: reviewer3,
        review: "I’ve been with Mercedes Pools for over 20 years. They’re knowledgeable, affordable, and true experts. They treat each client like family. I'm truly blessed to have found them!",
    },
];

const Testimonials = () => {
    return (
        <div style={{
            background: 'linear-gradient(to right, #434343, #000000)',
            padding: '40px 20px',
            width: '100%',
            margin: 'auto'
        }}>
            <h2 style={{
                textAlign: 'center',
                color: '#ff6a00',
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
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center'
                        }}>
                            <img
                                src={t.image}
                                alt={`Photo of ${t.name}`}
                                style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover', marginBottom: '10px' }}
                            />
                            <h4 style={{ margin: 0, color: '#ff6a00' }}>{t.name}</h4>
                            <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>{t.review}</p>
                            <div style={{ color: '#FFD700', fontSize: '18px' }}>★★★★★</div>
                        </div>
                    </div>
                ))}
            </div>

            <p style={{ textAlign: 'center', marginTop: '20px', color: '#555', fontSize: '14px' }}>
                <a href="https://g.co/kgs/9aikPZK" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6a00', textDecoration: 'none' }}>
                    Read More Reviews on Google
                </a>
            </p>
        </div>
    );
};

export default Testimonials;
