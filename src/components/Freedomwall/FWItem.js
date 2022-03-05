import React from 'react'
import styled from 'styled-components'
function FWItem({Submission}) {
  return (
    <SubmissionItemsStyled>

        <h1>{Submission.name}</h1>
        <p className="schoolstyle">{Submission.school}</p>
        <hr />
        <p>{Submission.comment}</p>
    </SubmissionItemsStyled>
  )
}
const SubmissionItemsStyled = styled.div`
background-color: #192734;
box-shadow: 10px 12px 20px rgba(0,0,0, .2);
border-radius: 2px;
padding: 3rem ;
margin: 1rem 0;
color: white;
cursor: pointer;


  h1 {
  
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    padding-bottom: 10px;
    letter-spacing: 2px;
    font-size: 30px;

  }

  .schoolstyle {
    font-family: 'Poppins', sans-serif;
    
    font-size: 11px;
    padding-bottom: .5rem;
    letter-spacing: 2px;
  
  }

  hr {
    width: 282px;
    border: 2px solid;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    padding-top: 1rem;
    
    letter-spacing: 0.095em;
  }

  


  @media screen and (max-width: 940px) {
     
      padding: 2rem ;
        
    
    
}




@media screen and (max-width: 450px) {

  padding: 3rem;



}

@media screen and (max-width: 360px) {

  padding: 1.5rem;



}

@media screen and (max-width: 280) {
     
  padding: 1rem ;
    


}



`

export default FWItem