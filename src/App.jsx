import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import SmoothScroll from './components/SmoothScroll'

const App = () => {
  return (
    <div >
        {/* <SmoothScroll/> */}
      <Navbar/>
       <Home/>
     
    </div>
  )
}

export default App
