import React from 'react'
import { Link } from 'react-router-dom'

const JoinUs = () => {
    return (
        <div className="bg-section ">
            <div className='join-overlay'></div>
            <div data-aos="zoom-in-down" className='text-center container'>
                <div className='love text-warning fs-5 '>Join Us Now</div>
                <div className='fs-1 bubblegum fw-bold '>Don’t Let Your Child’s Summer Vacation Pass,<br /> Join Our Robotics Workshop.</div>
                <div className='mt-5 d-flex align-items-center justify-content-center gap-2'>
                    <Link to={'/registration'} ><button className="btn btn-primary ">Enroll Now</button></Link>
                    <Link to={'/contact'} ><button className="btn btn-success ">Contact Us</button></Link>
                </div>
            </div>
        </div>

    )
}

export default JoinUs
