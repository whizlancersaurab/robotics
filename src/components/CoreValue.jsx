import React from 'react'

const CoreValue = () => {
    return (
        <div className='core-bg'>
            <div className='core-overlay'></div>
            <div className='container '>
                <div className='row my-0 my-sm-5 d-flex align-items-center '>
                    <div data-aos='fade-up' className='col col-12 col-md-4 text-center text-md-start core-contact'>
                        <div className='love color fs-5 '>Our Core Values</div>
                        <div className='fs-1 roboto lh-sm color fw-semibold'>Robotics learning is fun, and widens your imagination</div>
                    </div>
                    <div className='col col-12 col-md-8 text-center text-md-start core-contact'>
                        <div className='roboto text-dark'>At Adhyan Tech, our core values guides everything we do. They shape our approach to education, drive our commitment to excellence, and inspire us to make a meaningful impact on our students’ lives</div>
                        <button className='btn btn-primary mt-5 '>Discover More</button>
                    </div>
                </div>
                <div className='row g-4 d-flex align-items-center justify-content-center mt-3 mt-sm-0'>

                    <div className='col col-md-6 col-lg-3 d-flex justify-content-center'>
                        <div style={{ border: '4px dotted #0e6a8f' }} className='core-box'>
                            <div style={{ backgroundColor: '#0e6a8f' }} className='core-con'>
                                <p className='front'>Mission</p>
                                <div className='back fs-6'>
                                    Empowering students with knowledge and skill in robotics and AI through engaging education and hands-on-experience
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col col-md-6 col-lg-3 d-flex justify-content-center'>
                        <div style={{ border: '4px dotted #bc5557' }} className='core-box'>
                            <div style={{ backgroundColor: '#bc5557' }} className='core-con'>
                                <p className='front'>Vision</p>
                                <div className='back fs-6'>
                                    To be a leading educational hub that inspires innovation...
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col col-md-6 col-lg-3 d-flex justify-content-center'>
                        <div style={{ border: '4px dotted #08a89b' }} className='core-box'>
                            <div style={{ backgroundColor: '#08a89b' }} className='core-con'>
                                <p className='front'>Value</p>
                                <div className='back fs-6'>
                                    Building a supportive and inclusive community...
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col col-md-6 col-lg-3 d-flex justify-content-center'>
                        <div style={{ border: '4px dotted #526eb1' }} className='core-box'>
                            <div style={{ backgroundColor: '#526eb1' }} className='core-con'>
                                <p className='front'>Goal</p>
                                <div className='back fs-6'>
                                    Foster partnerships with schools, colleges, and industry...
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CoreValue
