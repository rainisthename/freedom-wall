import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import FWItem from './FWItem'
import styled from 'styled-components'



function FWForm() {
  const link = 'https://heroku1337.herokuapp.com/api/v1/crud'
  const [Submission, setSubmission] = useState([])


  useEffect(() => {
    getSubmission()
   
    
  }, [])
  async function getSubmission() {
      const data = await axios.get(link)
     
      setSubmission(data.data.crud)
  }

//   async function addSubmission(e) {
//     e.preventDefault()

//     const submissionData = {
//       name: SubmissionName ? SubmissionName : undefined,
//       comment: SubmissionComment ? SubmissionComment : undefined,
//       school: 'Northwestern University'
//     }

//     await axios.post(link, submissionData)

//     setSubmissionName('')
//     setSubmissionComment('')
//   }

  // const renderSubmission = () => {
  //   return Submission.map((Submission, i) => {
  //     return <FWItem key={i} Submission={Submission} />
  //   })
  // }

  const renderSubmission = () =>{
        
    let sortedSubmission = [...Submission];

    sortedSubmission = sortedSubmission.sort((a, b) =>{
        return new Date(b.createdAt) - new Date(a.createdAt)
    })

    return sortedSubmission.map((Submission, i) =>{ 
        return <FWItem key={i} Submission={Submission} getTodos={getSubmission}  />
    })
}
  
//   const insertSubmission = () =>{
//     return <div className="Texteditor">
//         <form onSubmit={addSubmission}>
//             <div className="">
//                 <input type="text" id="name" 
//                     placeholder="Enter Name..." 
//                     value={SubmissionName}
//                     onChange={(e) => setSubmissionName(e.target.value)}
//                     required
//                     />
//             </div>
//             <div className="input-control">
//                 <textarea name="" id="comment" cols="30" rows="5" 
//                     placeholder="Task Name..." 
//                     value={SubmissionComment}
//                     onChange={(e) => setSubmissionComment(e.target.value)}
//                     ></textarea>
//             </div>
//             <button className="submit-btn">Add Item</button>
//         </form>
//     </div>
// }
return (
    <ItemSubmission>
        {/* {insertSubmission()} */}
        {renderSubmission()}
    </ItemSubmission>
)
}

const ItemSubmission = styled.div`
padding-top: 9%;

  
@media screen and (max-width: 490px) {

    padding-top: 30%;


}
`
export default FWForm;