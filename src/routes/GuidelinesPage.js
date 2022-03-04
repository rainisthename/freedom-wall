import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Guidelines from '../components/Guidelines/Guidelines'

const GuidelinesPage = () => {
  return (
    <div className="app">
  <div className="gradient__bg">
    <Navbar />
    </div>

   <Guidelines />
    <Footer />
  </div>
  )
}

export default GuidelinesPage