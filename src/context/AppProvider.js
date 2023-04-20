import React, {createContext, useContext, useEffect, useState } from 'react'
import { data1 } from '../Data/Data1'




const AppContext=createContext()

const AppProvider = ({children}) => {
    const [user, setUser]=useState([])
    const [teacher,setTeacher]=useState(data1)

    useEffect(()=>{
      const getUserDetails=async()=>{
        try{
          const response=await fetch("https://6411f5f1f9fe8122ae18e9d8.mockapi.io/student",{
            method:"GET"            
          });
          const data=await response.json()
          setUser(data)
        }catch(error){
          console.log("unable to fetch Data")
        }
      }

      getUserDetails();

      const getTeacherDetails=async()=>{
        try{
          const response= await fetch("https://6411f5f1f9fe8122ae18e9d8.mockapi.io/Teacher",{
            method:"GET"
          });
          const data1=await response.json()
          setTeacher(data1)
        }catch(error){
          console.log("unable to fetch Data1")
        }
      }

      getTeacherDetails();


    },[])

    
  return (
    <AppContext.Provider value={{user, setUser,teacher,setTeacher}}>
    {children}
    </AppContext.Provider>
  )
}

export const AppState=()=>{
    return useContext(AppContext)
}

export default AppProvider