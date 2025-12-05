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
                        <p className="section-label color love">About Adhyan Tech</p>

                        <h1 className="about-title color">
                            The right environment for growing
                        </h1>

                        <p className="about-description roboto">
                            We have created modules specific to kids of various age groups.
                            Adhyan Tech provides a practical experience of what kids learn
                            in school — making education more interactive, fun and innovative.
                        </p>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="col-md-6 position-relative">
                        <div className="main-image-wrapper">
                            <img src={adhyan1} className="about-image img-fluid" alt="" />

                            <div className="exp-box text-center">
                                <h1 className="color">25+</h1>
                                <div className="love">Years of experience</div>
                            </div>

                            <img src={adhyan2} className="side-image img-fluid" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            {/* ---------- SECTION 1 ---------- */}

            {/* ---------- SECTION 2 ---------- */}
            <div className="about-bg mt-5">
                <div className="container py-5">
                    <div className="row  align-items-center flex-column-reverse flex-lg-row gy-4">

                        {/* IMAGES LEFT */}
                        <div className=" col-12 col-md-6  image-stack position-relative">
                            <img src={adhyan4} className="img-stack-item me-md-3" alt="" />
                            <img src={adhyan5} className="img-stack-item mt-md-5 mt-0" alt="" />
                            <img src={adhyan6} className="side-image2 img-fluid" alt="" />
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="col-12 col-md-6">
                            <p className="section-label-2 text-warning love fs-4">Our Value</p>

                            <h1 className="about-title-2 bubblegum">
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
            <div className="my-5 py-4">
                <div className="text-center mb-5">
                    <div className="fs-4  color love">Our Classes</div>
                    <div className="fw-bold fs-1  color bubblegum">Study Robotics <br /> Together</div>
                    <div className="fs-6 text-dark love">
                        Here are the 3 different modules in which you can learn Robotics
                    </div>
                </div>

                <div className="container">
                    <div className="row g-4">

                        {/* Starter */}
                        <div className="col-lg-4  col-md-6">
                            <div className="h-100 shadow-lg  classes-box hover-scale p-4 text-center rounded-4">
                                <h4 className="fw-bold mb-3 classes-box-title bubblegum ">Starter</h4>
                                <p className="text-muted ">
                                    Introduction to the basics of robotics and technology.
                                </p>
                                <a href="#" className="btn btn-primary px-4 fw-bold rounded-pill mt-3">
                                    Read More
                                </a>
                            </div>
                        </div>

                        {/* Explorer */}
                        <div className="col-lg-4  col-md-6">
                            <div className="h-100 classes-box shadow-lg  hover-scale p-4 text-center rounded-4">
                                <h4 className="fw-bold mb-3 classes-box-title bubblegum">Explorer</h4>
                                <p className="text-muted">
                                    Dive deeper into advanced topics in robotics and AI.
                                </p>
                                <a href="#" className="btn btn-danger px-4 fw-bold rounded-pill mt-3">
                                    Read More
                                </a>
                            </div>
                        </div>

                        {/* Champion */}
                        <div className="col-lg-4  col-md-6 mx-auto">
                            <div className=" h-100 classes-box shadow-lg  hover-scale p-4 text-center rounded-4">
                                <h4 className="fw-bold mb-3 classes-box-title bubblegum">Champion</h4>
                                <p className="text-muted">
                                    Master advanced concepts and tackle real-world challenges.
                                </p>
                                <a href="#" className="btn btn-primary px-4 fw-bold rounded-pill mt-3">
                                    Read More
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutTech;
