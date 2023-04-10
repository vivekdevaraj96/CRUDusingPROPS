import React from 'react'
import BaseApp from '../core/Base';
import { useParams } from 'react-router-dom';

function Userdetails({user}) {
    const {id}=useParams()
    const person=user[id];

  return (
    <BaseApp title={`Person name is ${person.fname}`}>
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">First name: {person.fname} </h5>
        
    <h6 class="card-subtitle mb-2 text-body-secondary">Last Name: {person.lname}</h6>
    
    <p class="card-text">Batch : {person.batch}</p>
    <p class="card-text">Email: {person.email}</p>
    <p class="card-text">Experience: {person.experience}</p>
   
  </div>
</div>
    </BaseApp>


    
  )
}

export default Userdetails