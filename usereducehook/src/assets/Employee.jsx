import React, { useReducer, useState } from 'react'

function Employee() {
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [city,setCity]=useState("")
    const [phone,setPhone]=useState("")
    const [state,dispatch]=useReducer(reducer,[{id:1,name:"Aman",city:"Pune",phone:8767426853},])
    function reducer(state,action)
    {
        switch(action.type)
        {
            case "add":
                return [...state,action.payload]
            case "del":
                return state.filter((e)=>{
                    return e.id !== action.payload
                })
        }
        return state
    }
    function addemp(e){
        e.preventDefault()
        let emp={id,name,city,phone}
        dispatch({
            type:"add",
            payload:emp
        })
    }
  return (
    <div>
        <h2>Employee Information</h2>
        {
            state.map((s,i)=>{
                return (
                    <li key={i}>
                        <span>{s.id} |</span>
                        <span> {s.name} |</span>
                        <span> {s.city} |</span>
                        <span> {s.phone} </span>
                        <span><button onClick={()=>dispatch({type:"del",payload:s.id})}>Delete</button></span>
                    </li>
                )
            })
        }
        <form onSubmit={addemp}>
            <input type="text" placeholder='Enter ID' value={id} onChange={(e)=>setId(e.target.value)}/><br></br>
            <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
            <input type="text" placeholder='Enter City' value={city} onChange={(e)=>setCity(e.target.value)}/><br></br>
            <input type="text" placeholder='Enter Phone No.' value={phone} onChange={(e)=>setPhone(e.target.value)}/><br></br>
            <button type='submit'>Add Employee</button>
        </form>
    </div>
  )
}

export default Employee