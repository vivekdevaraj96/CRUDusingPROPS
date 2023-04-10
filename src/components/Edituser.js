import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import BaseApp from '../core/Base';

const Edituser=({user,setUser})=>{  

  const [ids,setId]=useState("");
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [batch,setBatch]=useState("");
  const [experience,setExperience]=useState("")

  const {id}=useParams();

  const history=useHistory()

  const selectedUser=user.find((per)=>per.id === id); 
  console.log(selectedUser)

  useEffect(()=>{
setId(selectedUser.id)
setFname(selectedUser.fname)
setLname(selectedUser.lname)
setEmail(selectedUser.email)
setBatch(selectedUser.batch)
setExperience(selectedUser.experience)    
  },[]);

  const updateUser=()=>{
    const editIndex=user.findIndex((per)=>per.id === id);

    const editedData={
      id:ids,
      fname,
      lname,
      batch,
      email,
      experience
    }
    console.log(editIndex)
    user[editIndex]=editedData;
    setUser([...user]);
    history.push("/")
  }

  return (
            <div>
    <BaseApp title="Edit user">
        
            <input placeholder='id' value={ids} onChange={(event)=>setId(event.target.value)}/>
            <input placeholder='First name' value={fname} onChange={(event)=>setFname(event.target.value)}/>
            <input placeholder='Last name' value={lname} onChange={(event)=>setLname(event.target.value)}/>
            <input placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <input placeholder='batch' value={batch} onChange={(event)=>setBatch(event.target.value)}/>
            <input placeholder='Experience' value={experience} onChange={(event)=>setExperience(event.target.value)}/>
            <button onClick={()=>updateUser()}>Edit user</button>

        
    
    </BaseApp>
        
    </div>
  )
}

export default Edituser