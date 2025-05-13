import React from 'react';
import Image1 from "../images/pictures/123-1_2.JPEG"
import Image2 from "../images/pictures/123-1_5.JPEG"
import Image3 from "../images/pictures/123-1_3.JPEG"
import Image4 from "../images/pictures/123-1_1.JPEG"
import Logo from "../images/mercedespoollogo.jpg"
import MercedesPoolLogo from "../images/mercedespoollogo.jpg";

const galleryItems = [
    {
        image: Image4,
        title: "Filter Cleaning",
        tag: "Heavy Duty",
    },
    {
        image: Image1,
        title: "Commercial Pool Cleaning",
        tag: "Commercial Pools",
    },
    {
        image: Image2,
        title: "Residential Pool Cleaning",
        tag: "Residential Pools",
    },
    {
        image: Image3,
        title: "Netting, Leafing",
        tag: "Light Work",
    },
];

const Gallery = () => {
    return (
        <section id="work" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <img src={MercedesPoolLogo} alt="Mercedes Pools Logo" style={{ height: '40px'}} />

                            <h2 style={{color:'black',fontSize:'xxx-large',paddingTop:'30px'}}>Project Gallery</h2>

                        </div>
                    </div>

                    {galleryItems.map((item, i) => (
                        <div className="col-md-3 col-sm-6" key={i}>
                            <div
                                className="work-thumb"
                                style={{
                                    height: '300px',
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                    marginBottom: '30px',
                                    position: 'relative',
                                }}
                            >
                                <a href={item.image} className="image-popup" style={{ display: 'block', height: '100%' }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block',
                                        }}
                                    />
                                    <div
                                        className="work-info"
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            background: 'rgba(0,0,0,0.6)',
                                            color: 'white',
                                            padding: '10px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <h3 style={{ margin: 0 }}>{item.title}</h3>
                                        <small>{item.tag}</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Gallery;
