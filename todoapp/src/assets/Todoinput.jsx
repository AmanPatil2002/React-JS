import { useState } from 'react'

function Todoinput(prop) {
    const [inputtask,setInputtask]=useState("")
  return (
    <div>
        <input type='text' placeholder='Enter your task' value={inputtask} onChange={(e)=>setInputtask(e.target.value)}/>
        <button onClick={()=>{prop.addtodo(inputtask); setInputtask("")}}>Add</button>
    </div>
  )
}

export default Todoinput
