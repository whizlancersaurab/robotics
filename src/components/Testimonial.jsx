import React from "react";
import { motion } from "framer-motion";
import {
  Autoplay,
  EffectCoverflow,
  Pagination
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import bg from "/testimonial.png";
import img1 from "../assets/Images/joinusbg.png";

const Testimonial = () => {
  const testimonials = [
    {
      message:
        "The 'Explorer' module boosted my child’s confidence. They are more curious & excited to learn now!",
      author: "– Manoj, Parent",
      star:'⭐⭐⭐⭐⭐'
    },
    {
      message:
        "Amazing hands-on classes — my kid loves every session!",
      author: "– Priya, Parent",
      star:'⭐⭐⭐'
    },
    {
      message:
        "BOTIXBO has changed my child's learning approach completely!",
      author: "– Rahul, Parent",
      star:'⭐⭐⭐⭐'
    },
  ];

  return (
    <section
      className="clean-testi-wrapper"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="clean-overlay"></div>

      <div className="container position-relative z-2 py-5">
        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div data-aos='slide-right' className="col-lg-4">
            <p className="c-sub love">TESTIMONIALS</p>

            <h2 className="c-title bubblegum">
              What Parents <span>Say About BOTIXBO</span>
            </h2>

            <div className="c-line"></div>

            <SkiperTestimonialCarousel testimonials={testimonials} />
          </div>

          {/* RIGHT IMAGE */}
          <div data-aos='slide-up' className="col-lg-8 text-center">
            <img
              src={img1}
              className="c-image"
              alt=""
             
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;


const SkiperTestimonialCarousel = ({ testimonials }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Swiper
        effect="coverflow"
        slidesPerView={1}
        centeredSlides
        loop
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 220,
          modifier: 2.5,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="u-swiper"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="c-card ">
              <p className="c-quote">“{item.message}”</p>
              <p className="c-author">{item.author}</p>
              <div>{item.star}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};
