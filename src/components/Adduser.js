import React,{useState} from 'react'
import BaseApp from '../core/Base'
import { useHistory } from 'react-router-dom'
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


function Adduser() {

    const {values,handleChange, handleSubmit, handleBlur, errors, touched}=useFormik({
      initialValues:{
        id:"",
        fname:"",
        lname:"",
        email:"",
        batch:"",
        experience:""
      },
      validationSchema:userSchemaValidation,
      onSubmit:(newUser)=>{
        addNewUser(newUser)
      }
    })




  const {user,setUser}=AppState();
    const history=useHistory()


    const addNewUser=async(newUser)=>{
        
       
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
   
        <div className="margin-top">
    <BaseApp title="Add Student">
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
        

            <button type="submit">Add Student</button>
            </form>

        
    
    </BaseApp>
        
    </div>
 
    
  )
}

export default Adduser