import React, { useEffect, useState } from 'react'
import BaseApp from '../core/Base';
import { useHistory, useParams } from 'react-router-dom';
import { AppState } from '../context/AppProvider';

const Editteacher = () => {  
  const {teacher,setTeacher}=AppState();

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
  
    const updateTeacher=async()=>{
      const editIndex=teacher.findIndex((per)=>per.id === id);
  
      const editedData={
        id:ids,
        fname,
        lname,
        batch,
        email,
        experience
        
      }

      try{
        const response= await fetch(`https://6411f5f1f9fe8122ae18e9d8.mockapi.io/Teacher/${ids}`,{
          method:"PUT",
          body:JSON.stringify(editedData),
          headers:{
            "content-type":"application/json"
          }       

        })
        const data1=await response.json()

        console.log(data1)
      teacher[editIndex]=editedData;
      setTeacher([...teacher]);
      history.push("/teacherDetails")
      }catch(error){

      }

      
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