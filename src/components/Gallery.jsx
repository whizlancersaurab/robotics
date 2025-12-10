import React from 'react'
import img from '../assets/Images/gallery.png'
import CoreValue from './CoreValue'
import JoinUs from './JoinUs'
import Testimonial from './Testimonial'
import img1 from '../assets/Images/homegal.jpeg'
import img2 from '../assets/Images/homegal2.jpeg'
import img3 from '../assets/Images/homegal3.jpeg'
import img4 from '../assets/Images/homegal4.jpeg'
import img5 from '../assets/Images/homegal5.jpeg'
import img6 from '../assets/Images/homegal6.jpeg'
import img7 from '../assets/Images/homegal7.jpeg'
import img8 from '../assets/Images/joinusbg.png'
import img9 from '../assets/Images/adhyantech4.png'
import img10 from '../assets/Images/adhyantech5.png'





const images = [
    { img: img1, title: "Robotics Competition" },
    { img: img2, title: "School Seminar" },
    { img: img3, title: "School Seminar" },
    { img: img4, title: "Robots" },
    { img: img5, title: "Compaction Auditorium" },
    { img: img6, title: "Robotics Area" },
    { img: img7, title: "School Seminar" },
    { img: img8, title: "Join Us" },
    { img: img9, title: "Making Obstacle Avoider Robot" },
    { img: img10, title: "Making Obstacle Avoider Robot" },
];

const Gallery = () => {
    return (
        <div>
            <div className="about position-relative">
                <div className="abo-overlay"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div data-aos='slide-right' className="col-12 col-md-6 title text-center text-md-start fw-bold bubblegum color mt-5 mt-md-0">
                            Photo Gallery
                        </div>
                        <div data-aos='zoom-in' className="col-12 col-md-6 d-flex justify-content-center">
                            <img

                                src={img}
                                alt="About Us Image"
                                className="about-img"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="text-center fs-6 love color">A' Day</div>
                <h2 className="text-center fs-1 fw-bold bubblegum color ">A Day in Our Life</h2>
                <div className="row justify-content-center g-4 mt-3">

                    {images.map((item, index) => (
                        <div data-aos='zoom-in' key={index} className="col-6  col-lg-4  d-flex justify-content-center">
                            <div className="main-gallery-card">
                                <img src={item.img} alt={item.title} className="main-gallery-img" />
                                <div className="main-gallery-overlay">
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CoreValue />
            <JoinUs />
            <Testimonial />
        </div>
    )
}

export default Gallery
