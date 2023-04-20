import React,{useState} from 'react'
import BaseApp from '../core/Base'
import { useHistory } from 'react-router-dom'
import { AppState } from '../context/AppProvider';

function Adduser() {
  const {user,setUser}=AppState();
    const history=useHistory()

    const [id,setId]=useState("")
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [email,setEmail]=useState("")
    const [batch,setBatch]=useState("")
    const [experience,setExperience]=useState("")

    const addNewUser=async()=>{
        
        const newUser={
            id,
            fname,
            lname,
            email,
            batch,
            experience
        }
       try{
        const response=await fetch('https://6411f5f1f9fe8122ae18e9d8.mockapi.io/student',{
          method:"POST",
          body:JSON.stringify(newUser),
          headers:{
            "Content-Type":"application/json",
          },
        })
        const data=await response.json();
        setUser([...user, newUser])
        history.push("/userDetails")
       }catch(error){
        console.log(error)
       }

        
    }

  return (
   
        <div>
    <BaseApp title="Add Student">
        
            <input placeholder='id' value={id} onChange={(event)=>setId(event.target.value)}/>
            <input placeholder='First name' value={fname} onChange={(event)=>setFname(event.target.value)}/>
            <input placeholder='Last name' value={lname} onChange={(event)=>setLname(event.target.value)}/>
            <input placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <input placeholder='batch' value={batch} onChange={(event)=>setBatch(event.target.value)}/>
            <input placeholder='Experience' value={experience} onChange={(event)=>setExperience(event.target.value)}/>
            <button onClick={()=>addNewUser()}>Add Student</button>

        
    
    </BaseApp>
        
    </div>
 
    
  )
}

export default Adduser