import React from 'react';
import Movie from '../images/NewEclipseMovie.mp4'
import Eclipse from '../images/newllogo'

const HeroSection = () => {
    return (
        <section
            id="home"
            data-stellar-background-ratio="0.5"
            style={{
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Full background video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 50%',
                    zIndex: -1,
                }}
                poster="https://res.cloudinary.com/duz4vhtcn/image/upload/v1746493567/sandy5_gyj52w.jpg"
                src="https://res.cloudinary.com/duz4vhtcn/video/upload/v1746490843/vidu-video-2763219046132686_utz67d.mp4"
            />

            {/* Optional overlay for readability */}
            <div
                className="overlay"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.3)', // adjust if needed
                    zIndex: 0,
                }}
            ></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="home-info">
                            <h1 style={{ fontStyle: 'italic', fontFamily: 'ltc-bodoni-175' }}>
                                "Making your pool Clear and Bright 🌞."
                            </h1>
                            <a href="tel:+19729799004" className="btn section-btn smoothScroll">Call us Now</a>
                            <span>
            <a href="tel:+19729799004" style={{ textDecoration: 'none', color: 'inherit' }}>
              CALL US (972) 979-9004
            </a>
            <small>For any inquiry</small>
          </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
};

export default HeroSection;
