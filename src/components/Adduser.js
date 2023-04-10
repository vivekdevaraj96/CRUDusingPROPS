import React,{useState} from 'react'
import BaseApp from '../core/Base'
import { useHistory } from 'react-router-dom'

function Adduser({user,setUser}) {
    const history=useHistory()

    const [id,setId]=useState("")
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [email,setEmail]=useState("")
    const [batch,setBatch]=useState("")
    const [experience,setExperience]=useState("")

    const addNewUser=()=>{
        
        const newUser={
            id,
            fname,
            lname,
            email,
            batch,
            experience
        }
        setUser([...user, newUser])
        history.push("/")
    }

  return (
   
        <div>
    <BaseApp title="Add user">
        
            <input placeholder='id' value={id} onChange={(event)=>setId(event.target.value)}/>
            <input placeholder='First name' value={fname} onChange={(event)=>setFname(event.target.value)}/>
            <input placeholder='Last name' value={lname} onChange={(event)=>setLname(event.target.value)}/>
            <input placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <input placeholder='batch' value={batch} onChange={(event)=>setBatch(event.target.value)}/>
            <input placeholder='Experience' value={experience} onChange={(event)=>setExperience(event.target.value)}/>
            <button onClick={()=>addNewUser()}>Add user</button>

        
    
    </BaseApp>
        
    </div>
 
    
  )
}

export default Adduser