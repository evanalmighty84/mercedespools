import React from 'react';
import Image from '../images/Clearly.gif';
import Image2 from '../images/layingbythepool.jpg';

const AboutSection = () => {
    return (
        <section id="about" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-5 col-sm-6">
                        <div className="about-info">
                            <div className="section-title">
                                <h2>We'll make sure your pool is healthy and clean</h2>
                                <span className="line-bar">...</span>
                            </div>
                            <h1>Our professionals are #1 when it comes to customer care!</h1>
                            <p>Owners Jerry & Sandy Moss
                                Weekly Maintenance, Pool Renovations, Free Estimates, Equip Repair, Custom Pools & Spas Eclipse Pool Service is family owned and operated with over 25 years of industry experience.</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="about-info skill-thumb" style={{ textAlign: 'center' }}>
                            <img
                                src={Image2}
                                className="img-responsive"
                                style={{ maxWidth: '100%', height: 'auto' }}
                                alt="Pool Cleaning Clipart"
                            />
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="about-image">
                            <img
                                src={Image}
                                className="img-responsive"
                                alt="Painting Animation"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
