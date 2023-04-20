import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import BaseApp from '../core/Base';
import { AppState } from '../context/AppProvider';

const Edituser=()=>{  
  const {user,setUser}=AppState();

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

  const updateUser=async()=>{
    const editIndex=user.findIndex((per)=>per.id === id);

      const editedData={
        id:ids,
        fname,
        lname,
        batch,
        email,
        experience
      }

    try {

      

        const response=await fetch(`https://6411f5f1f9fe8122ae18e9d8.mockapi.io/student/${ids}`,{
          method:"PUT",
          body:JSON.stringify(editedData),
          headers:{
            "content-type":"application/json"
          }
        })
        const data=await response.json();
        
    }catch(error){
      console.log(error)
    }


   
    console.log(editIndex)
    user[editIndex]=editedData;
    setUser([...user]);
    history.push("/userDetails")
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