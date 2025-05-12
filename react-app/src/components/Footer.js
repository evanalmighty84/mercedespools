import React, { useEffect } from 'react';
import Image from "../images/logopoolservice.png";
import  EclipsePoolLogo  from "./../images/newllogo";

const Footer = () => {
    useEffect(() => {
        const currentYearSpan = document.getElementById('currentYear');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    }, []);

    return (
        <footer data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-5 col-sm-12">
                        <div className="footer-thumb footer-info" style={{ textAlign: 'center' }}>
                     <EclipsePoolLogo/>
                            <p>"Making your Pool Clear and Bright"</p>
                        </div>
                        <div className="phone-contact" style={{ textAlign: 'center', marginTop: '0px' }}>
                            <a href="tel:+19729799004" style={{ textDecoration: 'none', color: 'white' }}>
                                CALL US (972) 979-9004
                            </a>
                        </div>
                    </div>



                    <div className="col-md-2 col-sm-4">
                        <div className="footer-thumb">
                            <h2>Services</h2>
                            <ul className="footer-link">
                                <li><a href="#services">Full-Service Pool Cleaning</a></li>
                                <li><a href="#services">Green to Clean Recovery</a></li>
                                <li><a href="#services">Weekly Maintenance Plans</a></li>
                                <li><a href="#services">Pool Equipment Inspections</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <div className="footer-thumb">
                            <ul className="footer-link">
                                <h2>Company</h2>
                                <li><a href="#contact">Join our team</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <div className="footer-thumb">
                            <h2>Find us</h2>
                            <ul className="social-icon">
                                <li>
                                    <a href="https://www.facebook.com/p/Eclipse-Pool-Service-100063504253328/" className="fa fa-facebook-square" aria-label="Facebook"></a>
                                </li>
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
