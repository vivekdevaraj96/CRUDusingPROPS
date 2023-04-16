import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import BaseApp from '../core/Base'


const Addteacher = ({teacher, setTeacher}) => {
    const history=useHistory()

    const [id,setId]=useState("")
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [email,setEmail]=useState("")
    const [batch,setBatch]=useState("")
    const [experience,setExperience]=useState("")

    const addNewTeacher=()=>{
        
        const newTeacher={
            id,
            fname,
            lname,
            email,
            batch,
            experience
        }
        setTeacher([...teacher, newTeacher])
        history.push("/teacherDetails")
    }
  return (
    <div>
    <BaseApp title="Add Teacher">
        
            <input placeholder='id' value={id} onChange={(event)=>setId(event.target.value)}/>
            <input placeholder='First name' value={fname} onChange={(event)=>setFname(event.target.value)}/>
            <input placeholder='Last name' value={lname} onChange={(event)=>setLname(event.target.value)}/>
            <input placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <input placeholder='batch' value={batch} onChange={(event)=>setBatch(event.target.value)}/>
            <input placeholder='Experience' value={experience} onChange={(event)=>setExperience(event.target.value)}/>
            <button onClick={()=>addNewTeacher()}>Add user</button>

        
    
    </BaseApp>
        
    </div>
  )
}

export default Addteacher
