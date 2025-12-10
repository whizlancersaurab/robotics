import React from 'react'
import img1 from '../assets/Images/about.png'
import { FaFacebookF, FaTwitter, FaYoutube, FaBehance, FaWhatsapp } from "react-icons/fa";
import { useState } from 'react';
import { ContactUs } from '../services/api';
import { toast } from 'react-toastify';

const Contatact = () => {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false)

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };




    const validateFields = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10 digit phone number";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.length < 20) {
            newErrors.message = "Message must be at least 20 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        if (!validateFields()) return;


        try {
            const { data } = await ContactUs(formData);
            if (data?.success) {
                toast.success(data.message);
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                setErrors({});
            } else {
                toast.error(data?.message || "Something went wrong");
            }
        } catch (error) {
            console.error("CONTACT US ERROR:", error);
            const errorMsg =
                error?.response?.data?.message ||
                error?.message ||
                "Something went wrong, please try again.";

            toast.error(errorMsg);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            <div className="about position-relative">
                <div className="abo-overlay"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div data-aos='slide-right' className="col-12 col-md-6 title text-center text-md-start fw-bold bubblegum color mt-5 mt-md-0">
                            Contact Us
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
            <div className='container my-5'>
                <div className='bubblegum color display-5 fw-bold text-center text-sm-start mb-2'>Keep In Touch</div>
                <div className='row'>
                    <div className='bg-primary col col-sm-3' style={{ height: '1px' }}></div>
                    <div className='bg-success col col-sm-3' style={{ height: '1px' }}></div>
                    <div className='bg-primary col col-sm-3' style={{ height: '1px' }}></div>
                    <div className='bg-danger col col-sm-3' style={{ height: '1px' }}></div>
                </div>

                <div className="row g-4 align-items-center my-5">

                    {/* LEFT – MAP */}
                    <div data-aos='slide-up' className="col-12 col-lg-6">
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
                    <div data-aos='slide-left' className="col-12 col-lg-6">
                        <p className="text-uppercase text-primary color love">
                            Send Us A Message
                        </p>

                        <h1 className="fw-bold mb-4 color bubblegum">
                            We will be in touch shortly
                        </h1>

                        <form onSubmit={handleSubmit} >
                            <div className="row g-3">

                                {/* NAME */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-semibold">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`form-control rounded-pill ${errors.name ? "is-invalid" : ""}`}
                                        placeholder="Name"
                                    />
                                    {errors.name && <small className="text-danger">{errors.name}</small>}
                                </div>

                                {/* PHONE */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-semibold">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`form-control rounded-pill ${errors.phone ? "is-invalid" : ""}`}
                                        placeholder="Phone"
                                    />
                                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                                </div>

                                {/* EMAIL */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-semibold">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`form-control rounded-pill ${errors.email ? "is-invalid" : ""}`}
                                        placeholder="Email"
                                    />
                                    {errors.email && <small className="text-danger">{errors.email}</small>}
                                </div>

                                {/* SUBJECT */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-semibold">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`form-control rounded-pill ${errors.subject ? "is-invalid" : ""}`}
                                        placeholder="Subject"
                                    />
                                    {errors.subject && <small className="text-danger">{errors.subject}</small>}
                                </div>

                                {/* MESSAGE */}
                                <div className="col-12">
                                    <label className="form-label fw-semibold">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`form-control rounded-4 ${errors.message ? "is-invalid" : ""}`}
                                        placeholder="At least 20 chracters required !"
                                    ></textarea>
                                    {errors.message && <small className="text-danger">{errors.message}</small>}
                                </div>

                                {/* BUTTON */}
                                <div className="col-12 text-center">
                                    <button
                                        className="w-50 btn btn-primary rounded-pill py-2 fw-semibold"
                                    >
                                        {loading ? 'Sending...' : 'Send My Message'}
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
