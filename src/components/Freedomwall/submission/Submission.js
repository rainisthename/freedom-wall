import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./FormInput.css"
import logo from '../../../assets/logosub.png';
import { Link } from 'react-router-dom';

const Submission = () => {

  const link = 'https://heroku1337.herokuapp.com/api/v1/crud';
  const [SubmissionName, setSubmissionName] = useState('')
  const [SubmissionComment, setSubmissionComment] = useState('')

  async function addSubmission(e) {
    e.preventDefault()

    const submissionData = {
      name: SubmissionName ? SubmissionName :undefined,
      comment: SubmissionComment ? SubmissionComment : undefined,
      school: 'Northwestern University'
    }

    await axios.post(link, submissionData)
    setSubmissionName('')
    setSubmissionComment('')
  }

  const insertSubmission = () => {
    return <div className="outside-box">
     <Link to='/freedomwall'>
    <button className="submit-btn">Go Back</button>
    </Link>
    <div className="logo-style">
     
    <img src={logo}  alt="logo" />
    </div>
    <div className="form-box">
    
        <form onSubmit={addSubmission}>
      
            <div className="form-input">
          
                <input type="text" id="name" 
                    placeholder="Enter Name..." 
                    value={SubmissionName}
                    onChange={(e) => setSubmissionName(e.target.value)}
                    required
                    />
            </div>
            <div className="form-input">
                <textarea name="" id="comment" cols="30" rows="5" 
                    placeholder="Task Name..." 
                    value={SubmissionComment}
                    onChange={(e) => setSubmissionComment(e.target.value)}
                    ></textarea>
            </div>
            <button className="submit-btn">Create</button>
        </form>
    </div>
    
    </div>
  }
  return (
    <div>
      {insertSubmission()}
    </div>
  )
}

export default Submission