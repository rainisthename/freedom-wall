import React from 'react'
import {Header} from './containers'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import about from "./Pages/about"
// import guidelines from "./Pages/guidelines"
// import rants from "./Pages/rants"logo

import './App.css'
const App = () => {
  return (

    
    <div className="App">
      
     
      

    <div className="gradient__bg">
    
      
    <Navbar />
    
    </div>
    
    <Header />
    <Footer />
   
    </div>
     
  )
}

export default App