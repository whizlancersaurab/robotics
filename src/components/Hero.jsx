import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaBrain, FaChartLine } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import bg1 from '../assets/Images/robobg6.webp'
import bg2 from '../assets/Images/robobg7.webp'
import bg3 from '../assets/Images/robobg8.jpg'
import bg4 from '../assets/Images/robobg9.jpg'
import { Link } from "react-router-dom";

const Hero = () => {
    const images = [
        bg1,
        bg2,
        bg3,
        bg4,
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero" style={{ position: "relative", width: "100%", height: '80vh' }}>

            <AnimatePresence>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 2.5 }}
                    style={{
                        backgroundImage: `url(${images[index]})`,
                        backgroundSize:'cover',
                        backgroundPosition: "center",
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                    }}
                />
            </AnimatePresence>

            {/* TEXT SECTION */}
            <div
               data-aos='fade-down'
                className="container h-100 d-flex flex-column justify-content-center"
                style={{ position: "relative", zIndex: 2, color: "white" }}
            >
                <h1
                    className="fw-bold hero-title bubblegum"
                   
                >
                    We are Shaping Today’s Curious Minds
                </h1>


                <p
                    className="fs-5"
                    style={{

                        maxWidth: "550px",
                        textShadow: "0px 4px 15px rgba(0,0,0,0.6)",
                    }}
                >
                    Join our robotics summer camp 2026 and help kids boost creativity,
                    teamwork & problem solving.
                </p>

                <Link
                   to={'/registration'}
                    style={{ maxWidth: '160px' }}
                    className="btn btn-primary py-2 d-flex align-items-center justify-content-center gap-1"
                >
                    Enroll Now <IoIosPeople size={20} />
                </Link>
            </div>

            {/* BOTTOM CARDS */}
            <div
                data-aos='fade-up'
                className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-1"
                style={{
                    position: "relative",
                    marginTop: "-80px",
                    zIndex: 3,
                }}
            >
                {[
                    {
                        icon: <FaRobot size={40} />,
                        title: "Robotics",
                        text: "Creating, programming, and controlling machines to perform tasks autonomously."
                    },
                    {
                        icon: <FaBrain size={40} />,
                        title: "Artificial Intelligence",
                        text: "Simulating human intelligence in machines to solve complex problems."
                    },
                    {
                        icon: <FaChartLine size={40} />,
                        title: "Machine Learning",
                        text: "Teaching machines to learn from data and make predictions."
                    },
                ].map((box, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            maxWidth: "400px",
                            cursor:'pointer',
                            width: '100%',
                            minHeight: "200px",
                            padding: "25px",
                            borderRadius: "16px",
                            backdropFilter: "blur(10px)",
                            background: "rgba(255,255,255,0.15)",
                            border: "1px solid rgba(255,255,255,0.25)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                            color: "black",
                            textAlign: "center",
                        }}
                        className="bubblegum"
                    >
                        <div style={{ marginBottom: "12px"}} className="text-primary">{box.icon}</div>
                        <h4 className="color" style={{ fontWeight: "700"}}>{box.title}</h4>
                        <p className="roboto" style={{ fontSize: "0.95rem", marginTop: "10px" }}>{box.text}</p>
                    </motion.div>
                ))}
            </div>
        </div >
    );
};

export default Hero;
