import React from 'react'
import img1 from '../assets/Images/about.png'
import HomeGallery from './HomeGallery'
import { useState } from 'react';
import { Registration } from '../services/api';
import { toast } from 'react-toastify';

const EventRegistration = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        className: "",
        schoolName: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);


    const validateFields = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required";
        }


        const phoneDigits = formData.phone.replace(/\D/g, "");
        if (!phoneDigits || phoneDigits.length < 10) {
            newErrors.phone = "Enter a valid  phone number";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.className.trim()) {
            newErrors.className = "Class name is required";
        }

        if (!formData.schoolName.trim()) {
            newErrors.schoolName = "School name is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateFields()) return;

        try {
            setLoading(true);

            const { data } = await Registration(formData);

            if (data.success) {
                toast.success(data.message);
                setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    className: "",
                    schoolName: "",
                });
                setErrors({});
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong");
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

                        <div data-aos="slide-up" className="col-md-6">

                            <form onSubmit={handleSubmit}>

                                <div className="contact-form p-4 shadow-lg rounded-4">
                                    <div className="mb-4 fs-5 fw-bold love">Registration Now</div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                className={`form-control ${errors.fullName && "is-invalid"}`}
                                                placeholder="Full Name"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                            />
                                            {errors.fullName && <div style={{ fontSize: '11px' }} className="text-danger small">{errors.fullName}</div>}
                                        </div>

                                        <div className="col">
                                            <label>Phone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className={`form-control ${errors.phone && "is-invalid"}`}
                                                placeholder="Phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            {errors.phone && <div style={{ fontSize: '11px' }} className="text-danger small">{errors.phone}</div>}
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className={`form-control ${errors.email && "is-invalid"}`}
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <div style={{ fontSize: '11px' }} className="text-danger small">{errors.email}</div>}
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col">
                                            <label>Class Name</label>
                                            <input
                                                type="text"
                                                name="className"
                                                className={`form-control ${errors.className && "is-invalid"}`}
                                                placeholder="Class Name"
                                                value={formData.className}
                                                onChange={handleChange}
                                            />
                                            {errors.className && <div style={{ fontSize: '11px' }} className="text-danger small">{errors.className}</div>}
                                        </div>

                                        <div className="col">
                                            <label>School Name</label>
                                            <input
                                                type="text"
                                                name="schoolName"
                                                className={`form-control ${errors.schoolName && "is-invalid"}`}
                                                placeholder="School Name"
                                                value={formData.schoolName}
                                                onChange={handleChange}
                                            />
                                            {errors.schoolName && <div style={{ fontSize: '11px' }} className="text-danger small">{errors.schoolName}</div>}
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            className="btn btn-primary rounded-pill w-50"
                                            disabled={loading}
                                        >
                                            {loading ? "Submitting..." : "Submit"}
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div data-aos='slide-right' className="col-md-6 text-white text-center pe-5">
                            <h5 className="text-warning fw-bold love">Event Registration</h5>
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
