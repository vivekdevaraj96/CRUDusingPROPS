import React from 'react'
import { useHistory } from 'react-router-dom'

function BaseApp({title,children}) {
    const history=useHistory();
  return (
    <div>
        <nav class="navbar sticky-top bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">{title}</a>
        {/* <form class="container-fluid justify-content-start"> */}
        <div className="navbutton">
            <button class="btn btn-sm btn-outline-secondary" type="button" onClick={()=>history.push("/Adduser")}>Add User</button>
            <button class="btn btn-sm btn-outline-secondary" type="button" onClick={()=>history.push("/")}>Dashboard</button>
        </div>
                 {/* </form> */}

        </div>
        </nav>    
        <div className='children'>{children}</div>
    </div>
  )
}

export default BaseApp