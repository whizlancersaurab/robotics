import React from 'react'
import Hero from './Hero'
import AboutTech from './AboutTech'
import JoinUs from './JoinUs'
import CoreValue from './CoreValue'
import HomeApart from './HomeApart'
import Faq from './Faq'
import HomeContact from './HomeContact'
import HomeGallery from './HomeGallery'
import Testimonial from './Testimonial'
import Explorer from './Explorer'


const Home = () => {
  return (
    <div>
      <Hero />
      <AboutTech />
      <Explorer/>
      <JoinUs />
      <CoreValue />
      <HomeApart />
      <Faq />
      <Testimonial />
      <HomeContact />

      <HomeGallery />
    </div>
  )
}

export default Home
