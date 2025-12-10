import React from 'react'
import img1 from '../assets/Images/about.png'

const Blog = () => {
    return (
        <div>
            <div className="about position-relative">
                <div className="abo-overlay"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div data-aos='slide-right' className="col-12 col-md-6 title text-center text-md-start fw-bold bubblegum color mt-5 mt-md-0">
                            Blog & News
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
            <div class="container py-5">
                <div class="row ">

                    <div class="col-md-4">
                        <div class="card shadow-sm border-0 rounded-4 blog-card h-100">

                            <div class="card-body p-4">

                                <span class="badge bg-primary px-3 py-2 rounded-pill mb-3">
                                    Blog
                                </span>

                                <h5 class="fw-bold mb-2">
                                    April 21, 2024 — No Comments
                                </h5>

                                <p class="text-muted mb-4">
                                    Find Us H.No 576(O), B Colony, Behind Trimurti Honda, Gorakhpur.
                                    Opening Hours: Mon – Sat: 09:00 AM – 06:00 PM.
                                    Book a Visit Blog & more…
                                </p>

                                <a href="#" class="btn btn-primary rounded-pill px-4">
                                    Read More »
                                </a>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Blog
