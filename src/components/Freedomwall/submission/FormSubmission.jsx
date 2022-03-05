import React from 'react'
import "./FormInput.css"
const FormSubmission = (props) => {
  return (
    <div className="formInput">
        <label>Nickname</label>
       
        <input placeholder={props.placeholder} />
    </div>
  )
}

export default FormSubmission