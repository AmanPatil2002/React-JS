import { useState } from 'react'

function Todoinput(prop) {
    const [inputtask,setInputtask]=useState("")//get input from user 
  return (
    <div>
        <form>
          <input type='text' placeholder='Enter your task' value={inputtask} onChange={(e)=>setInputtask(e.target.value)} required/>
          <button onClick={()=>{prop.addtodo(inputtask); setInputtask("")}}>Add</button>
        </form>
    </div>
  )
}

export default Todoinput
