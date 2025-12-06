import React from "react";


const Faq = () => {
    return (
        <section className="faq-section py-5">
            <div className="container">
                {/* Section Title */}
                <div className="text-center mb-5">
                    <p className="section-subtitle love color">FAQ's</p>
                    <h2 className="section-title bubblegum color">
                        Popular Questions
                    </h2>
                    <p className="section-desc love fw-semibold">
                        Find answers to the most frequently asked questions.
                        If you still need help, feel free to contact us anytime.
                    </p>
                </div>

                {/* FAQ Content */}
                <div className="row g-4 justify-content-center roboto">

                    {/* Left Column */}
                    <div className="col-md-6">
                        <div className="accordion accordion-flush modern-accordion" id="faqLeft">

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#leftOne">
                                        Q: What age group is suitable for your courses?
                                    </button>
                                </h2>
                                <div id="leftOne" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                    <div className="accordion-body">
                                        A: Our courses are designed for school students aged 7 to 16, offering age-appropriate content and activities to cater to different learning levels.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#leftTwo">
                                        Q: Do I need any prior experience in robotics or programming?
                                    </button>
                                </h2>
                                <div id="leftTwo" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                    <div className="accordion-body">
                                        A: We provide all the necessary equipment and materials for our courses. Just bring your curiosity and enthusiasm, and we’ll handle the rest!
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#leftThree">
                                        Q: What equipment do I need for the courses?
                                    </button>
                                </h2>
                                <div id="leftThree" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                    <div className="accordion-body">
                                        A: We provide all the necessary equipment and materials for our courses. Just bring your curiosity and enthusiasm, and we’ll handle the rest!
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#leftFour">
                                        Q: How are the courses structured?
                                    </button>
                                </h2>
                                <div id="leftFour" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                    <div className="accordion-body">
                                        A: Our courses are divided into three modules: ‘Started’, ‘Explorer’, and ‘Champion’, each offering a progressive learning path with hands-on projects, interactive activities, and real-world applications.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6">
                        <div className="accordion accordion-flush modern-accordion" id="faqRight">

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#rightOne">
                                        Q: Are there any assessments or exams?
                                    </button>
                                </h2>
                                <div id="rightOne" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                    <div className="accordion-body">
                                        A: Yes, we conduct periodic assessments and evaluations to gauge students’ progress and understanding. However, our focus is on practical learning and skill development rather than traditional exams.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#rightTwo">
                                        Q: What are the benefits of learning robotics and AI?
                                    </button>
                                </h2>
                                <div id="rightTwo" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                    <div className="accordion-body">
                                        A: Learning robotics and AI not only equips you with valuable technical skills but also enhances creativity, problem-solving abilities, and critical thinking, preparing you for future careers in STEM fields.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#rightThree">
                                        Q: How do I enroll in your courses?
                                    </button>
                                </h2>
                                <div id="rightThree" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                    <div className="accordion-body">
                                        A: You can enroll in our courses through our website tynx.in, by contacting us via phone or email, or visiting our institute in person. We’re here to assist you every step of the way!
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Faq;
