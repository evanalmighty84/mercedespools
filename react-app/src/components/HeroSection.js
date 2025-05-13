import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const forwardVideoRef = useRef(null);
    const reverseVideoRef = useRef(null);
    const [isReversed, setIsReversed] = useState(false);


    const forwardVideoURL =
        'https://res.cloudinary.com/duz4vhtcn/video/upload/v1747084945/vidu-video-2772905594124313_online-video-cutter.com_1_g7mfmf.mp4';


    const reversedVideoURL =
        'https://res.cloudinary.com/duz4vhtcn/video/upload/e_reverse/v1747084945/vidu-video-2772905594124313_online-video-cutter.com_1_g7mfmf.mp4';

    useEffect(() => {
        const forward = forwardVideoRef.current;
        const reverse = reverseVideoRef.current;

        const playForward = () => {
            reverse.style.opacity = 0;
            forward.style.opacity = 1;
            forward.currentTime = 0;
            forward.play();
            setIsReversed(false);
        };

        const playReverse = () => {
            forward.style.opacity = 0;
            reverse.style.opacity = 1;
            reverse.currentTime = 0;
            reverse.play();
            setIsReversed(true);
        };

        forward.addEventListener('ended', playReverse);
        reverse.addEventListener('ended', playForward);

        playForward();

        return () => {
            forward.removeEventListener('ended', playReverse);
            reverse.removeEventListener('ended', playForward);
        };
    }, []);

    return (
        <section id="home">
            <div className="video-layer">
                <video ref={forwardVideoRef} muted playsInline>
                    <source src={forwardVideoURL} type="video/mp4" />
                </video>
                <video ref={reverseVideoRef} muted playsInline>
                    <source src={reversedVideoURL} type="video/mp4" />
                </video>
            </div>

            <div className=""></div>

            <div className="container content-layer">
                <div className="row">
                    <div className="col-md-6 col-sm-12 home-info">
                        <h1 style={{ fontStyle: 'italic', fontFamily: 'ltc-bodoni-175' }}>
                            "the premier swimming pool supplier and service firm in North Texas."
                        </h1>
                        <a href="tel:+14693663556" className="btn section-btn smoothScroll">Call us Now</a>
                        <span>
                            <a href="tel:+14693663556" style={{ textDecoration: 'none', color: 'inherit' }}>
                                CALL US (469) 366-3556
                            </a>
                            <small>For any inquiry</small>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
