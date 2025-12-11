import React from 'react'
import Faq from './Faq'
import img1 from '../assets/Images/about.png'
import bgimg from '../assets/Images/mainfaqbg.jpg'
import { Link } from 'react-router-dom'

const MainFaq = () => {
    const posts = [
        {
            title: "test",
            desc: "",
            date: "April 12, 2024",
            comments: "No Comments",
        },
        {
            title: "news",
            desc: "",
            date: "April 12, 2024",
            comments: "No Comments",
        },
        {
            title: "Hello world!",
            desc: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
            date: "April 11, 2024",
            comments: "1 Comment",
        },
    ];
    return (
        <div>
            <div className="about position-relative">
                <div className="abo-overlay"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div data-aos='slide-right' className="col-12 col-md-6 title text-center text-md-start fw-bold bubblegum color mt-5 mt-md-0">
                            Frequently Asked
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
            <Faq />
            <div style={{ backgroundImage: `url(${bgimg})` }} className="bg-section ">
                <div className='join-overlay'></div>
                <div data-aos='zoom-in-down' className='text-center container'>
                    <div className='love text-warning fs-5 '>Join Us Now</div>
                    <div className='display-3 bubblegum fw-bold '>Don’t Let Your Child’s <br /> Childhood Pass,<br /> Join Our Robotics Class Now!.</div>
                    <div className='mt-5 d-flex align-items-center justify-content-center gap-2'>
                        <Link to={'/registration'} ><button className="btn btn-primary ">Enroll Now</button></Link>
                        <Link to={'/contact'} ><button className="btn btn-success ">Contact Us</button></Link>
                    </div>
                </div>
            </div>
            <div
                className="py-5"
            // style={{
            //     backgroundImage: "url('https://tynx.in/wp-content/uploads/2024/04/BG2-pattern.png')", 

            //     backgroundRepeat: "repeat",
            //     backgroundPosition:'center center'
            // }}
            >

                <div className="container">

                    {/* Top small heading */}
                    <p className=" love text-success fs-5 mb-1">
                        Blog and News
                    </p>

                    {/* Main Heading */}
                    <h1 className="fw-semibold display-4 color mb-5" >
                        Latest News
                    </h1>

                    {/* Cards Section */}
                    <div className="row  g-4">
                        {posts.map((post, index) => (
                            <div className="col-12 col-md-6 col-lg-4" key={index}>
                                <div
                                    className="news-card h-100 d-flex shadow flex-column justify-content-between"
                                    style={{
                                        borderRadius: "25px",
                                    }}
                                >
                                    <div>
                                        <h4 className="fw-bold" style={{ color: "#0c1d4a" }}>
                                            {post.title}
                                        </h4>
                                        <p className="text-muted mt-2">{post.desc}</p>
                                    </div>

                                    <div
                                        className="mt-3 text-success small fw-semibold"
                                        style={{ fontSize: "14px" }}
                                    >
                                        {post.date} &nbsp; ~ &nbsp; {post.comments}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="text-center mt-4">
                        <button
                            className="btn text-white btn-primary fw-semibold px-5 py-2 rounded-pill"

                        >
                            All Blog
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MainFaq
