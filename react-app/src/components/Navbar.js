import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import  EclipsePoolLogo  from "./../images/newllogo";
import MercedesPoolLogo from "../images/mercedespoollogo.jpg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // optional: close menu on mobile
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-left">
                    <button
                        className={`navbar-toggle ${isOpen ? '' : 'collapsed'}`}
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                    >
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                    </button>
                </div>

                {/* Top-right corner logo (desktop only) */}


                <div className={`navbar-collapse ${isOpen ? 'in' : 'collapse'}`}>
                    {/* Mobile-first logo (only shows when open) */}
                    {isOpen && (
                   ''
                    )}

                    <ul className="nav navbar-nav navbar-nav-first">
                        <img src={MercedesPoolLogo} alt="Mercedes Pools Logo" style={{ height: '40px' }} />

                        <li><button onClick={() => scrollToSection('home')} className="nav-btn">Home</button></li>
                        <li><button onClick={() => scrollToSection('about')} className="nav-btn">About</button></li>
                        <li><button onClick={() => scrollToSection('services')} className="nav-btn">Services</button></li>
                        <li><button onClick={() => scrollToSection('work')} className="nav-btn">Project Gallery</button></li>
                        <li><button onClick={() => scrollToSection('contact')} className="nav-btn">Contact</button></li>
                        <li>
                            <button onClick={() => window.location.hash = '#/signin'} className="nav-btn">
                                Login
                            </button>
                        </li>
                    </ul>


                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a
                                href="https://www.facebook.com/mercedespools/"
                                className="fa fa-facebook-square"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            ></a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/mercedespools"
                                className="fa fa-instagram"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            ></a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/@mercedespool"
                                className="fa fa-youtube-play"
                                aria-label="YouTube"
                                target="_blank"
                                rel="noopener noreferrer"
                            ></a>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
