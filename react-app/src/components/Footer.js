import React, { useEffect } from 'react';
import MercedesPoolLogo from "./../images/mercedespoollogo.jpg";
import './Footer.css';


const Footer = () => {
    useEffect(() => {
        const currentYearSpan = document.getElementById('currentYear');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12">
                        <div className="footer-thumb footer-info" style={{ textAlign: 'center' }}>
                            <img src={MercedesPoolLogo} alt="Mercedes Pools Logo" style={{ height: '40px' }} />
                            <p>"Making your Pool Clear and Bright"</p>
                        </div>
                        <div className="phone-contact" style={{ textAlign: 'center', marginTop: '0px' }}>
                            <a href="tel:+14693663556" style={{ textDecoration: 'none', color: 'white' }}>
                                CALL US (972) 979-9004
                            </a>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-4">
                        <div className="footer-thumb">
                            <h2>Services</h2>
                            <ul className="footer-link">
                                <li>
                                    <button
                                        onClick={() => scrollToSection('services')}
                                        style={{
                                            all: 'unset',
                                            color: 'white',
                                            fontSize: '14px',
                                            lineHeight: '1.6',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Green to Clean Recovery
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('services')}
                                        style={{
                                            all: 'unset',
                                            color: 'white',
                                            fontSize: '14px',
                                            lineHeight: '1.6',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Weekly Maintenance Plans
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('services')}
                                        style={{
                                            all: 'unset',
                                            color: 'white',
                                            fontSize: '14px',
                                            lineHeight: '1.6',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Pool Equipment Inspections
                                    </button>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="col-md-2 col-sm-4">
                        <div className="footer-thumb">
                            <ul className="footer-link">
                                <h2>Company</h2>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        style={{
                                            all: 'unset',
                                            color: 'white',
                                            fontSize: '14px',
                                            lineHeight: '1.6',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Join our team
                                    </button>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="col-md-3 col-sm-4">
                        <div className="footer-thumb">
                            <h2>Find us</h2>
                            <ul className="social-icon">
                                <li><a href="https://www.facebook.com/mercedespools/" className="fa fa-facebook-square" aria-label="Facebook" target="_blank" rel="noopener noreferrer"></a></li>
                                <li><a href="https://www.instagram.com/mercedespools" className="fa fa-instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer"></a></li>
                                <li><a href="https://www.youtube.com/@mercedespool" className="fa fa-youtube-play" aria-label="YouTube" target="_blank" rel="noopener noreferrer"></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                        <div className="footer-bottom">
                            <div className="col-md-6 col-sm-5">
                                <div className="copyright-text" style={{ textAlign: 'center' }}>
                                    <p>Copyright &copy; <span id="currentYear"></span> Clubhouse Links</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
