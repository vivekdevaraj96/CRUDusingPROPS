import React, { useEffect, useState } from 'react'
import BaseApp from '../core/Base';
import { useHistory, useParams } from 'react-router-dom';
import { AppState } from '../context/AppProvider';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup'


const userSchemaValidation=yup.object({
  id:yup.string().required("Please specify your ID"),
  fname:yup.string().required("Please enter your first name"),
  lname:yup.string().required("Please enter your last name"),
  email:yup.string().email().required("Enter a valid Email ID"),
  batch:yup.string().min(3,"Enter proper Batch ID").required("Enter Batch ID"),
  experience:yup.string().required("Enter experience if there is no experience, Enter '-'")
})

const Editteacher = () => {  
  const {teacher,setTeacher}=AppState();

    // const [ids,setId]=useState("");
    // const [fname,setFname]=useState("");
    // const [lname,setLname]=useState("");
    // const [email,setEmail]=useState("");
    // const [batch,setBatch]=useState("");
    // const [experience,setExperience]=useState("")
  
    const {id}=useParams();
  
    const history=useHistory()
  
    const selectedTeacher=teacher.find((per)=>per.id === id); 
    console.log(selectedTeacher)

    const {values,handleChange, handleSubmit, handleBlur, errors, touched}=useFormik({
      initialValues:{
        id:selectedTeacher.id,
        fname:selectedTeacher.fname,
        lname:selectedTeacher.lname,
        email:selectedTeacher.email,
        batch:selectedTeacher.batch,
        experience:selectedTeacher.experience
      },
      validationSchema:userSchemaValidation,
      onSubmit:(editedData)=>{
        updateTeacher(editedData)
      }
    })
  
  //   useEffect(()=>{
  // setId(selectedTeacher.id)
  // setFname(selectedTeacher.fname)
  // setLname(selectedTeacher.lname)
  // setEmail(selectedTeacher.email)
  // setBatch(selectedTeacher.batch)
  // setExperience(selectedTeacher.experience)    
  //   },[]);
  
    const updateTeacher=async(editedData)=>{
      const editIndex=teacher.findIndex((per)=>per.id === id);
  
      // const editedData={
      //   id:ids,
      //   fname,
      //   lname,
      //   batch,
      //   email,
      //   experience
        
      // }

      try{
        const response= await fetch(`https://6411f5f1f9fe8122ae18e9d8.mockapi.io/Teacher/${id}`,{
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
      <BaseApp title="Edit teacher" onSubmit={handleSubmit}>          
              

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

            <button type="submit">Edit teacher</button>
            </form>
  
          
      
      </BaseApp>
          
      </div>
    )}

export default Editteacher