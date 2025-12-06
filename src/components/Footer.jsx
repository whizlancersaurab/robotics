import React from "react";
import logo from '../assets/Images/logo2.png'


const Footer = () => {
  return (
    <div  className="footer-wrapper">

      {/* FLOATING WHITE BOX */}
      <div className="container footer-box shadow-lg rounded-bottom-5 b border-5 border-top border-dark  p-5">
        {/* <div className="about-overlay"></div> */}

        <div style={{paddingBottom:'150px'}} className="row gy-4">

          <div className="col-sm-6  col-md-4">
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
          <div className="col-sm-6 col-md-2">
            <h5 className="footer-title">Useful Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-text">
              H.No 576(O), B Colony, Behind Trimurti Honda, Gorakhpur
            </p>
            <p className="footer-text mb-1">Mon - Sat: 09:00 AM - 06:00 PM</p>
            <p className="fw-bold fs-6 color">+91 9519913555</p>
          </div>
          <div className="col-sm-6  col-md-3">
            <h5 className="footer-title">Subscribe Newsletter</h5>
            <input 
              type="text" 
              placeholder="Your Name"
              className="form-control rounded-pill footer-input mb-3"
            />

            <input 
              type="email" 
              placeholder="Your Email"
              className="form-control rounded-pill footer-input mb-3"
            />

            <button className="btn submit-btn btn-primary rounded-pill w-50">Submit</button>
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
