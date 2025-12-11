import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About';
import Contatact from './components/Contatact';
import Blog from './components/Blog';
import MainFaq from './components/MainFaq';
import PricingPlan from './components/PricingPlan';
import EventRegistration from './components/EventRegistration';
import Gallery from './components/Gallery';
import { useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contatact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/faq' element={<MainFaq />} />
        <Route path='/pricing' element={<PricingPlan />} />
        <Route path='/registration' element={<EventRegistration />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <div className='mt-5'> <Footer /></div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>

  )
}

export default App
