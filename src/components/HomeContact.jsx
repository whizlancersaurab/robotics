import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { EnrollMent } from "../services/api";


const HomeContact = () => {
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    age: "",
    message: "",
  });
  const [loading, setLoading] = useState(false)

  const [errors, setErrors] = useState({});

  // ---------- VALIDATION ----------
  const validate = () => {
    let temp = {};
    if (!form.parentName.trim()) temp.parentName = "Parent name is required";
    if (!form.phone.trim()) temp.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone))
      temp.phone = "Enter a valid 10-digit mobile number";
    if (!form.email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      temp.email = "Enter a valid email";
    if (!form.childName.trim()) temp.childName = "Child name is required";
    if (!form.age.trim()) temp.age = "Age is required";
    else if (isNaN(form.age) || form.age <= 0)
      temp.age = "Enter a valid age";
    if (!form.message.trim()) temp.message = "Message is required";
    else if (form.message.length < 20) temp.message = 'Message at least 20 chracters'

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return
    setLoading(true)

    if (!validate()) {
      setLoading(false)
      return;
    }
    try {

      const { data } = await EnrollMent(form)
      if (data.success) {
        toast.success(data.message)
        setForm({
          parentName: "",
          phone: "",
          email: "",
          childName: "",
          age: "",
          message: "",
        })
        setErrors({})
      }

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    } finally {
      setLoading(false)
    }

  };
  return (
    <div className="contact-section">
      <div className="overlay"></div>
      <div className="container py-5 position-relative">
        <div className="row align-items-center flex-column-reverse flex-md-row gy-4">
          {/* Left Form */}
          <div data-aos='fade-up' className="col-md-6">
            <div className="contact-form p-4  rounded-4">
              <h4 className="mb-4 fw-bold love">Enroll Now</h4>

              <form onSubmit={handleSubmit}>

                <div className="row mb-3">
                  <div className="col">
                    <label>Parent Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.parentName ? "is-invalid" : ""}`}
                      placeholder="Parent Name"
                      name="parentName"
                      value={form.parentName}
                      onChange={handleChange}
                    />
                    {errors.parentName && (
                      <small style={{fontSize:'11px'}} className="text-danger">{errors.parentName}</small>
                    )}
                  </div>

                  <div className="col">
                    <label>Phone</label>
                    <input
                      type="text"
                      className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                      placeholder="Phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <small style={{fontSize:'11px'}} className="text-danger">{errors.phone}</small>
                    )}
                  </div>
                </div>


                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <small style={{fontSize:'11px'}} className="text-danger">{errors.email}</small>
                  )}
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <label>Child Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.childName ? "is-invalid" : ""}`}
                      placeholder="Child Name"
                      name="childName"
                      value={form.childName}
                      onChange={handleChange}
                    />
                    {errors.childName && (
                      <small style={{fontSize:'11px'}} className="text-danger">{errors.childName}</small>
                    )}
                  </div>

                  <div className="col">
                    <label>Age of Child</label>
                    <input
                      type="text"
                      className={`form-control ${errors.age ? "is-invalid" : ""}`}
                      placeholder="Age of Child"
                      name="age"
                      value={form.age}
                      onChange={handleChange}
                    />
                    {errors.age && (
                      <small style={{fontSize:'11px'}} className="text-danger">{errors.age}</small>
                    )}
                  </div>
                </div>


                <div className="mb-3">
                  <label>Message</label>
                  <textarea
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    rows="3"
                    placeholder="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <small style={{fontSize:'11px'}} className="text-danger">{errors.message}</small>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button className="btn btn-primary rounded-pill w-50">
                    {loading?'Submitting...':'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Content */}
          <div data-aos='slide-left' className="col-md-6 text-white text-center pe-5">
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
