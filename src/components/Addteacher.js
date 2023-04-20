import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import BaseApp from '../core/Base'
import { AppState } from '../context/AppProvider';


const Addteacher = () => {
  const {teacher,setTeacher}=AppState();
    const history=useHistory()

    const [id,setId]=useState("")
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [email,setEmail]=useState("")
    const [batch,setBatch]=useState("")
    const [experience,setExperience]=useState("")

    const addNewTeacher=async()=>{
        
        const newTeacher={
            id,
            fname,
            lname,
            email,
            batch,
            experience
        }

        try{
          const response=await fetch("https://6411f5f1f9fe8122ae18e9d8.mockapi.io/Teacher",{
            method:"POST",
            body:JSON.stringify(newTeacher),
            headers:{
              "content-type":"application/json",
            }
          })
          const data1=await response.json();
          console.log(data1)

          setTeacher([...teacher, data1])
        history.push("/teacherDetails")
        }catch(error){
          console.log("error in adding teacher Data")
        }

        
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
            <button onClick={()=>addNewTeacher()}>Add Teacher</button>

        
    
    </BaseApp>
        
    </div>
  )
}

export default Addteacher
