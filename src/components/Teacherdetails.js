import React from 'react'
import { useHistory } from 'react-router-dom'
import BaseApp from '../core/Base';

function Teacherdetails({teacher, setTeacher}) {
    console.log(teacher)

    const history=useHistory();

    
  const deleteteacher=(idx)=>{
    
    const alterList=teacher.filter((per)=>per.id !== idx)
    setTeacher(alterList);
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