import React from "react";
import img1 from '../assets/Images/homegal.jpeg'
import img2 from '../assets/Images/homegal2.jpeg'
import img3 from '../assets/Images/homegal3.jpeg'
import img4 from '../assets/Images/homegal4.jpeg'
import img5 from '../assets/Images/homegal5.jpeg'
import img6 from '../assets/Images/homegal6.jpeg'
import img7 from '../assets/Images/homegal7.jpeg'
import { Link } from "react-router-dom";


const images = [
  { img: img1, title: "Robotics Competition" },
  { img: img2, title: "School Seminar" },
  { img: img3, title: "School Seminar" },
  { img: img4, title: "Robots" },
  { img: img5, title: "Compaction Auditorium" },
  { img: img6, title: "Robotics Area" },
  { img: img7, title: "School Seminar" },
];

const HomeGallery = () => {
  return (
    <div className="gallery-section">

      {/* Title */}
      <div className="text-center fs-6 love color">A' Day</div>
      <h2 className="text-center fs-1 fw-bold bubblegum color ">A Day in Our Life</h2>
      <div className="zigzag-line"></div>

      {/* GALLERY GRID */}
      <div className="container mt-5">
        <div className="row justify-content-center g-4">

          {images.map((item, index) => (
            <div key={index} className="col col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div className="gallery-card">
                <img src={item.img} alt="" className="gallery-img" />
                <div className="gallery-overlay">
                  <span>{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM BOX */}
      <div className="container mt-5 ">
        
        <div className="bottom-box">
          <div className="gal-overlay"></div>
          <h3 className="bottom-msg bubblegum color">See Our BOTIXBO Photo Gallery!</h3>
          <Link to={'/gallery'} className="btn button btn-primary rounded-pill px-4">View Gallery</Link>
        </div>
      </div>

    </div>
  );
};

export default HomeGallery;
