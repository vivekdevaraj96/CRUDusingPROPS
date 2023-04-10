import React, { useState } from 'react';

import './App.css';
import { Redirect, Route,Switch } from 'react-router-dom';
import Usercomponent from './components/usercomponent';
import Edituser from './components/Edituser';
import Adduser from './components/Adduser';
import Nopage from './components/nopage';
import { data } from './Data/Data';
import Userdetails from './components/Userdetails';





function App() {
  const [user,setUser]=useState(data)
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
          <Usercomponent user={user} setUser={setUser}/>
      </Route>

      <Route path="/Adduser">
          <Adduser user={user} setUser={setUser}/>
      </Route>      

      <Route path="/Edituser/:id">
        <Edituser user={user} setUser={setUser}/>
      </Route>

      <Route path="/Userdetails/:id">
        <Userdetails user={user}/>
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
