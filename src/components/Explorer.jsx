import React from 'react'

const Explorer = () => {
    return (
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
    )
}

export default Explorer
