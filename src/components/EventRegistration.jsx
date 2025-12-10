import React from 'react'
import img1 from '../assets/Images/about.png'
import HomeGallery from './HomeGallery'
import HomeContact from './HomeContact'
const EventRegistration = () => {
    return (
        <div>
            <div className="about position-relative">
                <div className="abo-overlay"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div data-aos='slide-right' className="col-12 col-md-6 title text-center text-md-start fw-bold bubblegum color mt-5 mt-md-0">
                            Event Registration
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
            <div className="contact-section">
                <div className="overlay"></div>
                <div className="container py-5 position-relative">
                    <div className="row align-items-center flex-column-reverse flex-md-row gy-4">
                        {/* Left Form */}
                        <div data-aos='slide-up' className="col-md-6">
                            <div className="contact-form p-4 shadow-lg rounded-4">
                                <h4 className="mb-4 fw-bold love">Enroll Now</h4>

                                <div className="row mb-3">
                                    <div className="col">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control" placeholder="Parent Name" />
                                    </div>
                                    <div className="col">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" placeholder="Phone" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>

                                <div className="row mb-3">
                                    <div className="col">
                                        <label>Class Name</label>
                                        <input type="text" className="form-control" placeholder="Child Name" />
                                    </div>
                                    <div className="col">
                                        <label>School Name</label>
                                        <input type="text" className="form-control" placeholder="Age of Child" />
                                    </div>
                                </div>

                              

                                <div className="text-center">
                                    <button className="btn btn-primary rounded-pill w-50">
                                        Submit
                                    </button>
                                </div>

                            </div>
                        </div>

                        {/* Right Content */}
                        <div data-aos='slide-right' className="col-md-6 text-white pe-5">
                            {/* <h5 className="text-warning fw-bold love">Enroll Now</h5> */}
                            <h1 className="display-4 bubblegum mt-3 fw-bold">
                                Gorakhpur Mahotsav<br />2025 Event
                            </h1>
                        </div>

                    </div>
                </div>
            </div>
            <HomeGallery />

        </div>
    )
}

export default EventRegistration
