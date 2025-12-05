
import logo from "../assets/Images/logo2.png";

const Navbar = () => {
    return (
        <>
            {/* Top Info Bar */}
            <div className="container-fluid py-2 bg-light border-bottom shadow-lg">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between py-2 mx-5">

                    {/* Logo */}
                    <div className="text-center text-md-start mb-3 mb-md-0">
                        <img src={logo} width={140} alt="Logo" />
                    </div>

                    {/* Middle Section With 45° Divider */}
                    <div className="d-flex align-items-center gap-4 position-relative">

                        {/* 45° Line */}
                        <div
                            className="d-none d-md-block"
                            style={{
                                width: "2px",
                                height: "60px",
                                background: "linear-gradient(45deg, #ff0080, #8000ff)",
                                transform: "skewX(-20deg)",
                            }}
                        ></div>

                        {/* Find Us */}
                        <div className="text-center text-md-start d-none d-md-block">
                            <h6 className="fw-bold mb-1">📍 Find Us</h6>
                            <p className="mb-0 small text-muted">
                                No 576(O), B Colony, Behind Trimurti Honda, Gorakhpur
                            </p>
                        </div>

                        {/* Another 45° Line */}
                        <div
                            className="d-none d-md-block"
                            style={{
                                width: "2px",
                                height: "60px",
                                background: "linear-gradient(45deg, #8000ff, #00c6ff)",
                                transform: "skewX(-20deg)",
                            }}
                        ></div>

                        {/* Working Hours */}
                        <div className="text-center text-md-start d-none d-md-block">
                            <h6 className="fw-bold mb-1">⏰ Opening Hours</h6>
                            <p className="mb-0 small text-muted">
                                Mon - Sat: 09:00 AM - 06:00 PM
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            {/* Navigation Bar */}
            <nav className="navbar border-bottom navbar-expand-lg py-3 shadow-top">
                <div className="container">
                    <a className="fw-bold btn btn-primary  p-2"  href="#">
                        Book a Visit
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav ms-auto gap-lg-3 fw-bold">

                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Pricing Plan
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    FAQ
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Blog
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About Us
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact Us
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
