import React from 'react'
import img1 from '../assets/Images/about.png'
import { FaFacebookF, FaTwitter, FaYoutube, FaBehance, FaWhatsapp } from "react-icons/fa";

const Contatact = () => {
    return (
        <div>
            <div className="about position-relative">
                <div className="abo-overlay"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-md-6 title text-center text-md-start fw-bold bubblegum color mt-5 mt-md-0">
                            Contact Us
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <img

                                src={img1}
                                alt="About Us Image"
                                className="about-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='bubblegum color fs-1'>Keep In Touch</div>
                <div className='row'>
                    <div className='bg-primary col col-sm-3' style={{ height: '1px' }}></div>
                    <div className='bg-success col col-sm-3' style={{ height: '1px' }}></div>
                    <div className='bg-primary col col-sm-3' style={{ height: '1px' }}></div>
                    <div className='bg-danger col col-sm-3' style={{ height: '1px' }}></div>
                </div>

                <div className="row g-4 align-items-center my-5">

                    {/* LEFT – MAP */}
                    <div className="col-12 col-lg-6">
                        <div className="rounded-4 overflow-hidden shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28490.87919019844!2d83.36831704892171!3d26.796666763173523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399144f976c096ff%3A0xbc4e993e90085e8b!2sTrimurti%20Honda!5e0!3m2!1sen!2sin!4v1765181255473!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen=""
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                        </div>
                    </div>

                    {/* RIGHT – CONTACT FORM */}
                    <div className="col-12 col-lg-6">
                        <p className="text-uppercase text-primary color love">
                            Send Us A Message
                        </p>

                        <h1 className="fw-bold mb-4 color bubblegum">
                            We will be in touch shortly
                        </h1>

                        <form>
                            <div className="row g-3">

                                <div className="col-12 col-md-6">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control rounded-pill" placeholder="Name" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className="form-control rounded-pill" placeholder="Phone" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control rounded-pill" placeholder="Email" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label">Subject</label>
                                    <input type="text" className="form-control rounded-pill" placeholder="Subject" />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Message</label>
                                    <textarea
                                        rows="4"
                                        className="form-control rounded-4"
                                        placeholder="Message"
                                    ></textarea>
                                </div>

                                <div className="col-12 text-center">
                                    <button
                                        className="w-50 btn btn-primary rounded-pill py-2 fw-semibold"

                                    >
                                        Send My Message
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>


            </div>
            <div className="contact-banner position-relative text-white">

                {/* Overlay */}
                <div className="overlay"></div>

                {/* Content */}
                <div className="container d-flex align-items-center">
                    <div className="content">
                        <p className="text-warning  mb-1 fs-5 love">
                            Have an Inquiry?
                        </p>
                        <h1 className="fw-semibold display-3 mb-3">
                            Don't hesitate to <br /> contact us
                        </h1>
                        <p className="fw-semibold mb-3 bubblegum">
                            Follow our social media :
                        </p>
                        <div className="d-flex align-items-center justify-content-cente justify-sm-start gap-2">

                            <div className="icon-box bg-primary">
                                <FaFacebookF size={22} />
                            </div>

                            <div className="icon-box bg-info">
                                <FaTwitter size={22} />
                            </div>

                            <div className="icon-box bg-danger">
                                <FaYoutube size={22} />
                            </div>

                            <div className="icon-box bg-dark">
                                <FaBehance size={22} />
                            </div>
                            <div className="icon-box bg-success">
                                <FaWhatsapp size={22} />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contatact
