import React from 'react';

import './App.css';
import { Redirect, Route,Switch } from 'react-router-dom';
import Usercomponent from './components/usercomponent';
import Edituser from './components/Edituser';
import Adduser from './components/Adduser';
import Nopage from './components/nopage';
import Userdetails from './components/Userdetails';
import Mainpage from './components/Mainpage';
import Teacherdetails from './components/Teacherdetails';
import Addteacher from './components/Addteacher';
import Editteacher from './components/Editteacher';
import Teacher from './components/Teacher';
import { AppState } from './context/AppProvider';






function App() {
 const {user,setUser,teacher,setTeacher}=AppState();

 console.log(user)
 console.log(teacher)
 
  return (
    
    <div className="App">
      
      <Switch>
      <Route exact path="/">
          <Mainpage/>
      </Route>

      <Route path="/userDetails">
          <Usercomponent/>
      </Route>

      <Route path="/teacherDetails">
          <Teacherdetails/>
      </Route>

      <Route path="/Adduser">
          <Adduser/>
      </Route>     

      <Route path="/Addteacher">
          <Addteacher/>
      </Route>    

      <Route path="/Edituser/:id">
        <Edituser/>
      </Route>

      <Route path="/Editteacher/:id">
        <Editteacher/>
      </Route>

      <Route path="/User/:id">
        <Userdetails/>
      </Route>

      <Route path="/Teacher/:id">
        <Teacher/>
      </Route>

      {/* <Route path="/students">
        <Redirect path="/"/>
      </Route> */}

      <Route path="**">
          <Nopage/>

      </Route>



      </Switch>
     </div>
  );
}

export default App;
