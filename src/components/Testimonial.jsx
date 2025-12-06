import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bg from "/testimonial.png";
import img1 from "../assets/Images/joinusbg.png";

const Testimonial = () => {
    return (
        <section className="testi-wrapper" style={{ backgroundImage: `url(${bg})` }}>
            <div className="test-overlay"></div>

            <div className="container testi-content">
                <div className="testi-left">
                    <p className="testi-small color love fs-4">Testimonials</p>

                    <h2 className="testi-title bubblegum color">
                        Parent Say About <br /> <sapn >BOTIXBO</sapn>
                    </h2>

                    <div className="testi-line"></div>


                    <Carousel fade interval={2000} indicators={false}>
                        <Carousel.Item>
                            <div className="testi-card glass">
                                <p className="quote">
                                    The 'Explorer' module was a game-changer for my child. They've
                                    gained so much confidence and are always excited to share what
                                    they've learned. Highly recommend it!
                                </p>
                                <h6 className="author">– Manoj, Parent</h6>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="testi-card glass">
                                <p className="quote">
                                    Amazing hands-on learning experience. Loved how interactive the
                                    classes are!
                                </p>
                                <h6 className="author">– Priya, Parent</h6>
                            </div>
                        </Carousel.Item>
                    </Carousel>


                </div>

                <div className="testi-right">
                    <img src={img1} className="testi-img float" alt="kids" />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
