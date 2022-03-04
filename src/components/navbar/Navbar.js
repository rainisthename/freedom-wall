import React, {useState} from 'react'
import './NavbarStyle.css'
import {FaBars, FaTimes} from 'react-icons/fa'

import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';
const Navbar = () => {

    const [nav,setNav] =useState(false)
    const handleNav = () => setNav(!nav)
    
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <img src={logo}  alt="logo" />
                <h3>FREEDOM WALL</h3>
            </div>

            <ul className= {nav ? 'nav-menu active' : 'nav-menu'}>
              
              
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Freedomwall'>Freedom Wall</Link></li>
                <li><Link to='/Guidelines'>Guidelines</Link></li>
                <li><Link to='/Blogs'>Blogs</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <button>SUBMIT RANT</button>
            </ul>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<FaBars classname='icon' />):(<FaTimes className='icon'/>)}
             
            </div>
        </div>
    </div>
  )
}

export default Navbar