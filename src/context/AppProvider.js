import React, {useEffect, useState } from "react";




function AppProvider({children}) {

    const [state,setState]=useState();

    useEffect(()=>{
        const getuserDetails=async()=>{
            try{
                const response=await fetch("https://6411f5f1f9fe8122ae18e9d8.mockapi.io/user",{method:"GET"});
                const data=await response.json();
                console.log(data);

                setState(data)
            }catch(error){
                console.log(error)
            }
        }

        getuserDetails();
    },[])

  return (
    <div state={state}>{children}</div>
  )
}

export default AppProvider