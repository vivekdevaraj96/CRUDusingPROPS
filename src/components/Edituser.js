import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import BaseApp from '../core/Base';
import { AppState } from '../context/AppProvider';
import { TextField } from '@mui/material';
import * as yup from 'yup'
import { useFormik } from 'formik';

const userSchemaValidation=yup.object({
  id:yup.string().required("Please specify your ID"),
  fname:yup.string().required("Please enter your first name"),
  lname:yup.string().required("Please enter your last name"),
  email:yup.string().email().required("Enter a valid Email ID"),
  batch:yup.string().min(3,"Enter proper Batch ID").required("Enter Batch ID"),
  experience:yup.string().required("Enter experience if there is no experience, Enter '-'")
})

const Edituser=()=>{  
  const {user,setUser}=AppState();
  

  // const [ids,setId]=useState("");
  // const [fname,setFname]=useState("");
  // const [lname,setLname]=useState("");
  // const [email,setEmail]=useState("");
  // const [batch,setBatch]=useState("");
  // const [experience,setExperience]=useState("")

  const {id}=useParams();

  const history=useHistory()

  const selectedUser=user.find((per)=>per.id === id); 
  console.log(selectedUser)

  const {values,handleChange, handleSubmit, handleBlur, errors, touched}=useFormik({
    initialValues:{
      id:selectedUser.id,
      fname:selectedUser.fname,
      lname:selectedUser.lname,
      email:selectedUser.email,
      batch:selectedUser.batch,
      experience:selectedUser.experience
    },
    validationSchema:userSchemaValidation,
    onSubmit:(editedData)=>{
      updateUser(editedData)
    }
  })

//   useEffect(()=>{
// setId(selectedUser.id)
// setFname(selectedUser.fname)
// setLname(selectedUser.lname)
// setEmail(selectedUser.email)
// setBatch(selectedUser.batch)
// setExperience(selectedUser.experience)    
//   },[]);

  const updateUser=async(editedData)=>{
    const editIndex=user.findIndex((per)=>per.id === id);

      // const editedData={
      //   id:ids,
      //   fname,
      //   lname,
      //   batch,
      //   email,
      //   experience
      // }

    try {

      

        const response=await fetch(`https://6411f5f1f9fe8122ae18e9d8.mockapi.io/student/${id}`,{
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
    <form className='Textareas' onSubmit={handleSubmit}>
            <TextField fullWidth id="outlined-basic" name="id" label="id" onBlur={handleBlur}
                        variant="outlined" value={values.id} onChange={handleChange}/>
            {touched.id && errors.id ? <p style={{color:"crimson"}}>{errors.id}</p>: ""}

            <TextField fullWidth id="outlined-basic" name="fname" label="First name" onBlur={handleBlur}
                        variant="outlined" value={values.fname} onChange={handleChange}/>
                         {touched.fname && errors.fname ? <p style={{color:"crimson"}}>{errors.fname}</p>: ""}

            <TextField fullWidth id="outlined-basic" name="lname" label="Last name" onBlur={handleBlur}
                        variant="outlined" value={values.lname} onChange={handleChange}/>
                         {touched.lname && errors.lname ? <p style={{color:"crimson"}}>{errors.lname}</p>: ""}

            <TextField fullWidth id="outlined-basic" name="email" label="Email" onBlur={handleBlur}
                        variant="outlined" value={values.email} onChange={handleChange}/>
                         {touched.email && errors.email ? <p style={{color:"crimson"}}>{errors.email}</p>: ""}

            <TextField fullWidth id="outlined-basic" name="batch" label="batch" onBlur={handleBlur}
                        variant="outlined" value={values.batch} onChange={handleChange}/>
                         {touched.batch && errors.batch ? <p style={{color:"crimson"}}>{errors.batch}</p>: ""}

            <TextField fullWidth id="outlined-basic" name="experience" label="Experience" onBlur={handleBlur}
                        variant="outlined" value={values.experience} onChange={handleChange}/>
                         {touched.experience && errors.experience ? <p style={{color:"crimson"}}>{errors.experience}</p>: ""}
        

            <button type="submit">Edit Student</button>
            </form>
        
            

            {/* <div className='Textareas'>
            <TextField fullWidth id="outlined-basic" label="id" variant="outlined" value={ids} onChange={(event)=>setId(event.target.value)}/>
            <TextField fullWidth id="outlined-basic" label="First name" variant="outlined" value={fname} onChange={(event)=>setFname(event.target.value)}/>
            <TextField fullWidth id="outlined-basic" label="Last name" variant="outlined" value={lname} onChange={(event)=>setLname(event.target.value)}/>
            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <TextField fullWidth id="outlined-basic" label="batch" variant="outlined" value={batch} onChange={(event)=>setBatch(event.target.value)}/>
            <TextField fullWidth id="outlined-basic" label="Experience" variant="outlined" value={experience} onChange={(event)=>setExperience(event.target.value)}/>
        

            <button onClick={()=>updateUser()}>Edit user</button>
            </div> */}

        
    
    </BaseApp>
        
    </div>
  )
}

export default Edituser