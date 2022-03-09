import React from 'react'
import './About-us.css'



const about = () => {
  return (
   <div className="about-content ">
     <div className="container ">
       <div className="content">
        <p>The Student Board or simply called (ST WALL) is an online Student Board websites that allows students to share their feelings, rants, thoughts anonymously.</p> 
        <p> Student Board was created on January 2022. All of the content on this website is uploaded by anonymous students. </p>
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
              <li>EE</li>
            </ul>
          </li>
          <li>Tester
            <ul className="b">
              <li>Aaron Cudal</li>
              
            </ul>
          </li>
          
          
        </ul>

       </div>
     </div>
   </div>
  )
}

export default about