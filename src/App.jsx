import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About';
import Contatact from './components/Contatact';
import Blog from './components/Blog';
import MainFaq from './components/MainFaq';
import PricingPlan from './components/PricingPlan';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contatact/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/faq' element={<MainFaq/>} />
        <Route path='/pricing' element={<PricingPlan/>} />
      </Routes>
     <div className='mt-5'> <Footer /></div>
    </BrowserRouter>
  )
}

export default App
