import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import About from '../components/about/about'

const AboutPage = () => {
  return (
 <div className="app">
  <div className="gradient__bg">
    <Navbar />
    </div>

   <About />
   <Footer />
    
  </div>
  
  )
}

export default AboutPage