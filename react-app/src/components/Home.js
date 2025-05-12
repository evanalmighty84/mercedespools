import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Testimonials from './Testimonials';
import ServicesSection from './ServicesSection';
import Gallery from './Gallery';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ModalForm from './ModalForm';

import '../styles/templatemo-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Pool Cleaning Services | Murphy, Plano, Sachse, Allen, Rowlett</title>
                <meta name="description" content="Eclipse Pool Service provides professional pool cleaning, maintenance, and repair in Murphy, Plano, Sachse, Allen, and Rowlett." />
                <meta name="keywords" content="Murphy pool cleaning, Plano pool cleaning, Sachse pool cleaning, Allen pool cleaning, Rowlett pool cleaning" />
                <meta property="og:title" content="Eclipse Pool Service" />
                <meta property="og:description" content="Top-rated pool services in Murphy, Plano, Sachse, Allen, and Rowlett." />
            </Helmet>

            {/* SEO Hidden Headings */}
            <h1 className="visually-hidden">Pool Cleaning and Repair Services in Murphy, Plano, Sachse, Allen, and Rowlett</h1>
            <h2 className="visually-hidden">Expert Pool Cleaning Services</h2>
            <h2 className="visually-hidden">Reliable Pool Repair Company</h2>
            <h2 className="visually-hidden">Top Rated Pool Maintenance in Murphy, Plano, Sachse, Allen, Rowlett</h2>

            <Navbar />
            <HeroSection />
            <AboutSection />
            <Testimonials />
            <ServicesSection />
            <Gallery />
            <ContactSection />
            <Footer />
            <ModalForm />
        </div>
    );
};

export default HomePage;
