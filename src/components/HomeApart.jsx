import React from "react";
import img1 from "../assets/Images/homeapart.jpg";


const features = [
  {
    icon: "🎲",
    title: "Creative Solution",
    desc: "Innovative and engaging educational programs tailored to inspire creativity.",
  },
  {
    icon: "📝",
    title: "Experienced Team",
    desc: "Dedicated educators and industry experts passionate about student success.",
  },
  {
    icon: "🏭",
    title: "Industrial Experience",
    desc: "Real-world insights and hands-on training from industry professionals.",
  },
  {
    icon: "✔️",
    title: "Effective Execution",
    desc: "Well-planned courses and attentive support for optimal learning outcomes.",
  },
];

const HomeApart = () => {
  return (
    <section className="homeapart-section py-5">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">

          {/* LEFT CONTENT */}
          <div className="col-md-6 mb-4 mb-md-0 fade-in-left 
            text-center text-md-start 
            d-flex flex-column align-items-center align-items-md-start">

            <h6 className="apart-subtitle color love">What Sets Us Apart</h6>

            <h2 className="apart-title color bubblegum">
              Different kids, <br /> different learning
            </h2>

            <p className="apart-desc">
              Experience innovative and engaging educational programs tailored
              to inspire creativity.
            </p>

            {/* Feature List */}
            <div className="features-list">
              {features.map((item, index) => (
                <div className="apart-item" key={index}>
                  <span className="icon">{item.icon}</span>
                  <div>
                    <h5 className="bubblegum fs-4">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center fade-in-right">
            <img src={img1} alt="Learning innovation" className="img-fluid apart-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeApart;
