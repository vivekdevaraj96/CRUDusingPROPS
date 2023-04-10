import React from 'react'
import { useHistory } from 'react-router-dom'

function Nopage() {
    const history=useHistory()
  return (
    <div><h1>Wrong page</h1>
        <button onClick={()=>history.push("/")}>Return to Dashboard
    </button></div>
  )
}

export default Nopage