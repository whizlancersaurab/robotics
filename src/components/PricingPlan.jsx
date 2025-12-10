import React from 'react'
import img1 from '../assets/Images/pricing.png'
import Faq from './Faq'
import HomeApart from './HomeApart'
import img2 from '../assets/Images/homeapart.jpg'
import robo2 from '../assets/Images/pricingrobo2.png'

const PricingPlan = () => {
    return (
        <div>
            <div className="about position-relative">
                <div className="abo-overlay"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div data-aos='slide-right' className="col-12 col-md-6 title text-center text-md-start fw-bold bubblegum color mt-5 mt-md-0">
                            Pricing Package

                        </div>
                        <div data-aos='zoom-out' className="col-12 col-md-6 d-flex justify-content-center">
                            <img

                                src={img1}
                                alt="About Us Image"
                                className="about-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
             <div className="wrapper">
                <div className="container main-content">
                    <div className="row align-items-center mb-5">
                        <div data-aos='slide-up'  className="col-md-6 text-center">
                            <img
                                src={img2}
                                alt="kid learning"
                                className="img-fluid rounded main-image"
                            />
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 parent-robo2">
                            <p data-aos='slide-left'  className="color mb-1 fs-5  love">About Program</p>
                            <h1 data-aos='slide-left'  className="fw-bold color big-title">
                                Expressing the Future<br />learning
                            </h1>
                            <p data-aos='slide-left' className="text-muted mt-3">
                                Join our Robotics, AI, Machine Learning classes 2024 and
                                elevate kid’s problem-solving ability with creativity and teamwork.
                            </p>
                            <button className="btn btn-primary rounded-pill px-4 py-2 mt-3">Discover More</button>
                            <div data-aos='slide-right' className='robo2'><img src={robo2} className='pricing-robo2' alt="" /></div>
                        </div>

                    </div>

                    <div  className="row justify-content-center mt-5">
                        
                        <div data-aos='fade-right' className=" col-md-4 col col-12 mb-4">
                            <div className="course-card">
                                <h5>40 Hours Learning</h5>
                                <p>4+ Robots</p>
                                <p>Hands-On Experience</p>
                                <p className="price">1899/-</p>
                                <div className='text-center'>
                                    <button className="btn btn-warning w-50">Enroll Now</button>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-up' className="col-md-4 col col-12 mb-4">
                            <div className="course-card">
                                <h5>60 Hours Learning</h5>
                                <p>6+ Robots + IOT</p>
                                <p>Hands-On Experience</p>
                                <p className="price">2899/-</p>
                                 <div className='text-center'>
                                    <button className="btn btn-success w-50">Enroll Now</button>
                                </div>
                            </div>
                        </div>

                       
                        <div data-aos='fade-left' className="col-md-4 col col-12 mb-4">
                            <div className="course-card">
                                <h5>80 Hours Learning</h5>
                                <p>8+ Robots + AI + IOT</p>
                                <p>Hands-On Experience</p>
                                <p className="price">3899/-</p>
                                 <div className='text-center'>
                                    <button className="btn btn-danger w-50">Enroll Now</button>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
            <div style={{marginTop:'-220px'}} className='pricing-bg' >
                    <div className='overlay'></div>
                    </div>
            <HomeApart />
            <Faq />
           
        </div>
    )
}

export default PricingPlan
