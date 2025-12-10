import React from 'react'
import img1 from '../assets/Images/about.png'
import AboutTech from './AboutTech'
import JoinUs from './JoinUs'
import CoreValue from './CoreValue'
const About = () => {
    return (
        <div>
            <div className="about position-relative">
                <div className="abo-overlay"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div data-aos='slide-right' className="col-12 col-md-6 title text-center text-md-start fw-bold bubblegum color mt-5 mt-md-0">
                            About Us
                        </div>
                        <div data-aos='zoom-in' className="col-12 col-md-6 d-flex justify-content-center">
                            <img
                          
                                src={img1}
                                alt="About Us Image"
                                className="about-img"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <AboutTech />
            <JoinUs />
            <CoreValue />

        </div>
    )
}

export default About
