import React, { useState } from "react";
import logo from '../assets/Images/logo2.png'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'
import { SubscribeCompany } from "../services/api";


const Footer = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [loading ,setLoading] = useState(false)

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors = {};
    if (!userData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (userData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!userData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userData.email)) {
        newErrors.email = "Enter a valid email.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (!validateForm()) {
      toast.error("Please fix form errors!");
      return;
    }

    try {
      const { data } = await SubscribeCompany(userData);

      if (data?.success) {
        toast.success(data.message || "Subscribed successfully!");

        setUserData({ name: "", email: "" });
        setErrors({});
      } else {
        toast.error(data?.message || "Something went wrong!");
      }

    } catch (error) {
      console.log("API Error:", error);

      const errMsg =
        error?.response?.data?.message ||
        error?.message ||
        "Server error! Please try again later.";

      toast.error(errMsg);
    }finally{
      setLoading(false)
    }
  };




  return (
    <div className="footer-wrapper">
      <div className="container footer-box shadow-lg rounded-bottom-5 b border-5 border-top border-dark  p-5">
        <div style={{ paddingBottom: '150px' }} className="row gy-4">

          <div className="col-sm-4  col-lg-3">
            <img
              src={logo}
              alt="logo"
              width="130"
              className="footer-logo mb-2"
            />
            <p className="text-muted small fw-bold">Where Fun Builds Future</p>
            <div className="social-wrapper d-flex gap-2 mt-4">
              <a href="#" className="social-icon fb"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon insta"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon tw"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-icon li"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="social-icon wa"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>
          <div className="col-sm-4 col-lg-3">
            <h5 className="footer-title">Useful Links</h5>
            <ul className="footer-links list-unstyled">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About Us</Link></li>
              <li><Link to={'/faq'}>FAQ</Link></li>
              <li><Link to={'/pricing'}>Pricing Plan</Link></li>

            </ul>
          </div>
          <div className="col-sm-4 col-lg-3">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-text">
              H.No 576(O), B Colony, Behind Trimurti Honda, Gorakhpur
            </p>
            <p className="footer-text mb-1">Mon - Sat: 09:00 AM - 06:00 PM</p>
            <p className="fw-bold fs-6 color">+91 9519913555</p>
          </div>
          <div className="col-sm-12  col-lg-3">
            <h5 className="footer-title">Subscribe Newsletter</h5>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control rounded-pill footer-input mb-1"
                onChange={handleChange}
                value={userData.name}
                autoComplete="off"
              />
              {errors.name && <small className="text-danger ms-2">{errors.name}</small>}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control rounded-pill footer-input mb-1"
                onChange={handleChange}
                value={userData.email}
                autoComplete="off"
              />
              {errors.email && <small className="text-danger ms-2">{errors.email}</small>}

              <div className="text-center text-lg-start mt-2">
                <button className="btn submit-btn btn-primary rounded-pill w-50">
                  {loading?'submitting....':'Submit'}
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-white py-3 small">
        Copyright © 2024 BOTIXBO, All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
