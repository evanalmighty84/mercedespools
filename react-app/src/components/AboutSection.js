import React from 'react';
import Image from '../images/Clearly.gif';
import Image2 from '../images/layingbythepool.jpg';
import MercedesPoolLogo from "../images/mercedespoollogo.jpg";

const AboutSection = () => {
    return (
        <section
            id="about"
            data-stellar-background-ratio="0.5"
            style={{
                paddingTop: '80px',
                paddingBottom: '80px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <div className="container">
                <div className="row" style={{  alignItems: 'center' }}>
                    <div
                        className="col-md-5 col-sm-6"
                        style={{ marginBottom: '40px' }}
                    >
                        <div className="about-info">
                            <h1 style={{ marginBottom: '20px' }}>
                                Our professionals are #1 when it comes to customer care!
                            </h1>
                            <p style={{ color: 'black', fontSize: '16px' }}>
                                Weekly Maintenance, Pool Renovations, Free Estimates, Equipment Repair, Custom Pools & Spas. Eclipse Pool Service is family-owned and operated with over 25 years of industry experience.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div
                            className="about-image"
                            style={{
                                position: 'relative',
                                paddingBottom: '56.25%',
                                height: 0,
                                overflow: 'hidden',
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/2a_aTwzIOa8"
                                title="Eclipse Pool Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                }}
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* New About Mercedes Section */}
                <div className="row" style={{ marginTop: '60px' }}>
                    <div className="col-12">

                        <div className="section-title" style={{textAlign:'center'}}>
                            <img src={MercedesPoolLogo} alt="Mercedes Pools Logo" style={{ height: '40px'}} />

                            <h2 style={{color:'black',fontSize:'xxx-large',paddingTop:'30px'}}>About Mercedes</h2>

                        </div>
                        <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6' }}>
                            <strong>Mercedes’ Pools™</strong> is a family owned and operated company. The company was founded in 1995 by the Dixon family, which has lived in Plano, TX since the 1960’s and has been in the pool business since 1984.
                        </p>
                        <ul style={{ fontSize: '16px', color: '#333', paddingLeft: '20px', lineHeight: '1.6' }}>
                            <li>We pride ourselves in providing quality services and products in a timely manner.</li>
                            <li>We provide all types of supplies and services as well as renovations and repairs.</li>
                            <li>All of our services and products are always of the highest grade and are fully guaranteed.</li>
                            <li>It is our goal for our family to provide your family with a fresh water pool that is always clean and attractive.</li>
                            <li>We would like to thank your family for all the support you give to our family in making us your pool provider.</li>
                        </ul>
                        <p style={{ fontSize: '16px', color: '#333', marginTop: '20px' }}>
                            <strong>Mercedes’ Pools™</strong> provides the highest standards of pool care, repair and remodeling for the discriminating homeowner. We service the entire Metroplex.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
