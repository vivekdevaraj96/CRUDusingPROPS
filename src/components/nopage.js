import React from 'react'
import { useHistory } from 'react-router-dom'

function Nopage() {
    const history=useHistory()
  return (
    <div><h1>Wrong page</h1>
        <button onClick={()=>history.push("/userDetails")}>Return to Student Dashboard
    </button>{"  "}
    
    <button onClick={()=>history.push("/teacherDetails")}>Return to TeacherDashboard
    </button></div>
  )
}

export default Nopage