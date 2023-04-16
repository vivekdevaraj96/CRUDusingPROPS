import React, { useState } from 'react';

import './App.css';
import { Redirect, Route,Switch } from 'react-router-dom';
import Usercomponent from './components/usercomponent';
import Edituser from './components/Edituser';
import Adduser from './components/Adduser';
import Nopage from './components/nopage';
import { data } from './Data/Data';
import { data1 } from './Data/Data1';
import Userdetails from './components/Userdetails';
import Mainpage from './components/Mainpage';
import Teacherdetails from './components/Teacherdetails';
import Addteacher from './components/Addteacher';
import Editteacher from './components/Editteacher';
import Teacher from './components/Teacher';





function App() {
  const [user,setUser]=useState(data)
  const [teacher,setTeacher]=useState(data1)
 
  return (
    
    <div className="App">
      
      <Switch>
      <Route exact path="/">
          <Mainpage/>
      </Route>

      <Route path="/userDetails">
          <Usercomponent user={user} setUser={setUser}/>
      </Route>

      <Route path="/teacherDetails">
          <Teacherdetails teacher={teacher} setTeacher={setTeacher}/>
      </Route>

      <Route path="/Adduser">
          <Adduser user={user} setUser={setUser}/>
      </Route>     

      <Route path="/Addteacher">
          <Addteacher teacher={teacher} setTeacher={setTeacher}/>
      </Route>    

      <Route path="/Edituser/:id">
        <Edituser user={user} setUser={setUser}/>
      </Route>

      <Route path="/Editteacher/:id">
        <Editteacher teacher={teacher} setTeacher={setTeacher}/>
      </Route>

      <Route path="/User/:id">
        <Userdetails user={user}/>
      </Route>

      <Route path="/Teacher/:id">
        <Teacher teacher={teacher}/>
      </Route>

      <Route path="/students">
        <Redirect path="/"/>
      </Route>

      <Route path="**">
          <Nopage/>

      </Route>



      </Switch>
     </div>
  );
}

export default App;
