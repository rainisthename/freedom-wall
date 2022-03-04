import React from 'react'
import './FooterStyle.css'
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            {/* <img src={logo} alt="logo" />
            <h2>Freedom Wall</h2>  */}
          </div>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Schools</h3>
            <p>Northwestern University</p>
            <p>Mariano Marcos State University</p>
          </div>

          <div className="col">
            <h3>Contact Us</h3>
            <p>Facebook</p>
            <p>Email</p>
          </div>

          <div className="col">
            <h3>Follow Us</h3>
            <p>Facebook</p>
          </div>

          <div className="col">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>Freedom Wall</p>
            <p>Guidelines</p>
            <p>Blogs</p>
          </div>
          
        </div>
       
      </div>
      <p className="footer-background"> © Cherry Software X ICONS Organization</p>
      
    </div>
  )
}

export default Footer