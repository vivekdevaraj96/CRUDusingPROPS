import React from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

const Mainpage = () => {
    const history=useHistory();
  return (
    <div> 
        <h2>Kindly select which Details to be shown..</h2>
        <Form.Select aria-label="Default select example">
    <option>Open this select menu</option>
    <option value="1" onClick={()=>history.push("/userDetails")}>Student Details</option>
    <option value="2">Teacher Details</option>   
  </Form.Select></div>
  )
}

export default Mainpage