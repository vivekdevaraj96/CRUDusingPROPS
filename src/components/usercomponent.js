import React from 'react'
import BaseApp from '../core/Base';

import { useHistory } from 'react-router-dom';


function Usercomponent({user, setUser}) {
  const history=useHistory();
  

  const deleteUser=(idx)=>{
    
    const alterList=user.filter((per)=>per.id !== idx)
    setUser(alterList);
  }
  return (
    <div><BaseApp title="Student Details">
      <div className='user-content'>
      <table class="table table-dark table-hover">
      <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">First Name</th>
           <th scope="col">Last Name</th>
           <th scope="col">Batch</th>
           <th scope="col">Email</th>
           <th scope="col">Experience</th>
           <th scope="col">Options</th>
         </tr>
       </thead>
       <tbody>
       {user.map((person,idx)=>(
           <tr key={idx}>
           <th scope="row">{person.id}</th>
           <td>{person.fname}</td>
           <td>{person.lname}</td>
           <td>{person.batch}</td>
           <td>{person.email}</td>
           <td>{person.experience}</td>           
           <td><button type="button" 
                      class="btn btn-light btn-sm"
                      onClick={()=>history.push(`/Edituser/${person.id}`)}>Edit</button>                      
                      {" "}
                <button type="button" 
                class="btn btn-secondary btn-sm"
                onClick={()=>history.push(`/User/${idx}`)}
                >view</button>                      
                {" "}
                <button type="button" class="btn btn-danger btn-sm" onClick={()=>deleteUser(person.id)}>Delete</button>
          </td>
           </tr>          
        ))
      }                
       </tbody>

      </table>
      
      </div>
    </BaseApp></div>
    
  )
}

export default Usercomponent;