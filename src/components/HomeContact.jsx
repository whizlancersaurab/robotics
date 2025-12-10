import React from "react";


const HomeContact = () => {
  return (
    <div className="contact-section">
      <div className="overlay"></div>
      <div className="container py-5 position-relative">
        <div className="row align-items-center flex-column-reverse flex-md-row gy-4">
          {/* Left Form */}
          <div data-aos='fade-up' className="col-md-6">
            <div className="contact-form p-4 shadow-lg rounded-4">
              <h4 className="mb-4 fw-bold love">Enroll Now</h4>

              <div className="row mb-3">
                <div className="col">
                  <label>Parent Name</label>
                  <input type="text" className="form-control" placeholder="Parent Name" />
                </div>
                <div className="col">
                  <label>Phone</label>
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" />
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label>Child Name</label>
                  <input type="text" className="form-control" placeholder="Child Name" />
                </div>
                <div className="col">
                  <label>Age of Child</label>
                  <input type="text" className="form-control" placeholder="Age of Child" />
                </div>
              </div>

              <div className="mb-3">
                <label>Message</label>
                <textarea className="form-control" rows="3" placeholder="Message"></textarea>
              </div>

              <div className="text-center">
                <button className="btn btn-primary rounded-pill w-50">
                Submit
              </button>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div data-aos='slide-left' className="col-md-6 text-white pe-5">
            <h5 className="text-warning fw-bold love">Enroll Now</h5>
            <h1 className="display-4 bubblegum mt-3 fw-bold">
              Join Our Fun Class <br /> with other Classmate
            </h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeContact;
