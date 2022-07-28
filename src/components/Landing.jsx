import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Features from './Features'
import Testimonial from './Testimonial'
import Cta from './Cta'
import Footer from './Footer'

function Landing() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <Testimonial/>
        <Cta/>
        <Footer/>
    </div>
  )
}

export default Landing