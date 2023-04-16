import React, { useEffect, useState } from 'react'
import BaseApp from '../core/Base';
import { useHistory, useParams } from 'react-router-dom';

const Editteacher = ({teacher,setTeacher}) => {  

    const [ids,setId]=useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [batch,setBatch]=useState("");
    const [experience,setExperience]=useState("")
  
    const {id}=useParams();
  
    const history=useHistory()
  
    const selectedTeacher=teacher.find((per)=>per.id === id); 
    console.log(selectedTeacher)
  
    useEffect(()=>{
  setId(selectedTeacher.id)
  setFname(selectedTeacher.fname)
  setLname(selectedTeacher.lname)
  setEmail(selectedTeacher.email)
  setBatch(selectedTeacher.batch)
  setExperience(selectedTeacher.experience)    
    },[]);
  
    const updateTeacher=()=>{
      const editIndex=teacher.findIndex((per)=>per.id === id);
  
      const editedData={
        id:ids,
        fname,
        lname,
        batch,
        email,
        experience
      }
      console.log(editIndex)
      teacher[editIndex]=editedData;
      setTeacher([...teacher]);
      history.push("/teacherDetails")
    }
  
    return (
              <div>
      <BaseApp title="Edit teacher">
          
              <input placeholder='id' value={ids} onChange={(event)=>setId(event.target.value)}/>
              <input placeholder='First name' value={fname} onChange={(event)=>setFname(event.target.value)}/>
              <input placeholder='Last name' value={lname} onChange={(event)=>setLname(event.target.value)}/>
              <input placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
              <input placeholder='batch' value={batch} onChange={(event)=>setBatch(event.target.value)}/>
              <input placeholder='Experience' value={experience} onChange={(event)=>setExperience(event.target.value)}/>
              <button onClick={()=>updateTeacher()}>Edit teacher</button>
  
          
      
      </BaseApp>
          
      </div>
    )}

export default Editteacher