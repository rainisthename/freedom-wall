import React from 'react'
import './header.css'
import Stock from '../../assets/Stock.png';
const Header = () => {
  return (
    <div className="ff__header section__padding" id="home"> 
    <div className="ff__header-content">
      <h1 className="title__text">What’s the Student Freedom Wall all about?</h1>
      
      <p> This website purpose is to let students share their rants, feelings, towards anything anonymously. <p>Put anything you want in the freedom wall and it will be here forever..</p>
      </p>
      <div className="ff__header-content__input">
      <div className="ff__navbar-submit-home">
      
      <button type="button">SUBMIT RANT</button>
      </div>
        
      </div>
      
    </div>

    <div className="ff__header-image">
        <img src={Stock} alt="stock" />
      </div> 
    </div>



  )
}

export default Header