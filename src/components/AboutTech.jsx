
import CountUp from "react-countup";
import adhyan1 from "../assets/Images/adyantech1.png";
import adhyan2 from "../assets/Images/adhyantech2.png";
import adhyan4 from "../assets/Images/adhyantech4.png";
import adhyan5 from "../assets/Images/adhyantech5.png";
import adhyan6 from "../assets/Images/adhyantech6.png";

const AboutTech = () => {
    return (
        <div className="about-container">

            {/* ---------- SECTION 1 ---------- */}
            <div className="container py-5">
                <div className="row align-items-center gy-4">

                    {/* LEFT TEXT */}
                    <div className="col-md-6">
                        <p className="section-label color love">About BOTIXBO Tech</p>

                        <h1 className="about-title color">
                            The right environment for growing
                        </h1>

                        <p  data-aos="zoom-in" className="about-description roboto">
                            We have created modules specific to kids of various age groups.
                            Adhyan Tech provides a practical experience of what kids learn
                            in school — making education more interactive, fun and innovative.
                        </p>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="col-md-6 position-relative">
                        <div className="main-image-wrapper">
                            <img  data-aos="zoom-in" src={adhyan1} className="about-image img-fluid" alt="" />

                            <div data-aos="slide-right" className="exp-box text-center">
                                <h1 className="color"> <CountUp start={0} end={25} duration={2.5} />+</h1>
                                <div className="love">Years of experience</div>
                            </div>

                            <img  data-aos="slide-left" src={adhyan2} className="side-image img-fluid" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            {/* ---------- SECTION 1 ---------- */}

            {/* ---------- SECTION 2 ---------- */}
            <div className="about-bg mt-5">
                <div className="about-overlay"></div>
                <div className="container py-5">
                    <div className="row  align-items-center justify-content-center flex-column-reverse flex-lg-row gy-4">

                        {/* IMAGES LEFT */}
                        <div className=" col-12 col-md-6  image-stack position-relative">
                            <img data-aos='slide-down' src={adhyan4} className="img-stack-item me-md-3" alt="" />
                            <img data-aos='slide-up' src={adhyan5} className="img-stack-item mt-md-5 mt-0" alt="" />
                            <img src={adhyan6} className="side-image2 img-fluid" alt="" />
                        </div>

                        {/* RIGHT TEXT */}
                        <div data-aos='slide-left' className="col-12 col-md-6 ">
                            <p className="section-label-2 color love fs-4">Our Value</p>

                            <h1 className="about-title-2 color bubblegum">
                                Safe and Better Future for Our Kids, with Better Learning
                            </h1>

                            <p className="about-description-2 roboto">
                                At Adhyan, we provide hands-on training in Robotics, AI, Machine Learning
                                and new generation technology. Kids get exposure to real-world practical
                                concepts for better future learning.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            {/* ---------- SECTION 2 ---------- */}
            

        </div>
    );
};

export default AboutTech;
