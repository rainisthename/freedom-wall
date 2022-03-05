import React from 'react'
import './About-us.css'



const about = () => {
  return (
   <div className="about-content ">
     <div className="container ">
       <div className="content">
        <p>The Freedom Wall or simply called (FR WALL) is an online Freedom Wall websites that allows students to share their feelings, rants, thoughts anonymously.</p> 
        <p> Freedom Wall was created on January 2022. All of the content on this website is uploaded by anonymous students. </p>
        <p>Our Staff</p>
        <ul className="a">
          <li>Administrator
            <ul className="b">
              <li>lstrbumbilya</li>
              <li>wataruwatari</li>
            </ul>
          </li>
          <li>Developer
            <ul className="b">
              <li>EE-Sama</li>
              <li>masterbaiter</li>
            </ul>
          </li>
          <li>Moderator
            <ul className="b">
              <li>El Terrible</li>
              <li>wwtashi</li>
            </ul>
          </li>
          
          
        </ul>

       </div>
     </div>
   </div>
  )
}

export default about