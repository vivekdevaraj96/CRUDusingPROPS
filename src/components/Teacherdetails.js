import React from 'react'
import { useHistory } from 'react-router-dom'
import BaseApp from '../core/Base';
import { AppState } from '../context/AppProvider';

function Teacherdetails() {
  const {teacher,setTeacher}=AppState();
    console.log(teacher)

    const history=useHistory();

    
  const deleteteacher=async(idx)=>{
    try{
      const response=await fetch(`https://6411f5f1f9fe8122ae18e9d8.mockapi.io/Teacher/${idx}`,{
        method:"DELETE"        
      })
      const data1=await response.json();
      console.log(data1)
      const alterList=teacher.filter((per)=>per.id !== idx)
        setTeacher(alterList);
    }catch(error){
        console.log("error in deleting Teacher data")
    }
    
    
  }
  return (
    <div>
        <BaseApp title="Teacher Details">
      <div className='user-content'>
      <table class="table table-dark table-hover">
      <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">First Name</th>
           <th scope="col">Last Name</th>
           <th scope="col">Batch</th>
           <th scope="col">Email</th>
           <th scope="col">Teaching Experience</th>
           <th scope="col">Options</th>
         </tr>
       </thead>
       <tbody>
       {teacher.map((person,idx)=>(
           <tr key={idx}>
           <th scope="row">{person.id}</th>
           <td>{person.fname}</td>
           <td>{person.lname}</td>
           <td>{person.batch}</td>
           <td>{person.email}</td>
           <td>{person.experience}</td>           
           <td><button type="button" 
                      class="btn btn-light btn-sm"
                      onClick={()=>history.push(`/Editteacher/${person.id}`)}>Edit</button>                      
                      {" "}
                <button type="button" 
                class="btn btn-secondary btn-sm"
                onClick={()=>history.push(`/teacher/${idx}`)}
                >view</button>                      
                {" "}
                <button type="button" class="btn btn-danger btn-sm" onClick={()=>deleteteacher(person.id)}>Delete</button>
          </td>
           </tr>          
        ))
      }                
       </tbody>

      </table>
      
      </div>
    </BaseApp>


    </div>
  )
}

export default Teacherdetails