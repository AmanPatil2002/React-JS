import axios from 'axios'
import React, { useState } from 'react'

function Postmethod() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [city,setCity]=useState("")
    const [phone,setPhone]=useState("")
    function newemp(e)
    {
        e.preventDefault()
        let emp={name,email,city,phone}
        console.log(emp)
        // fetch("http://localhost:3000/employee",{
        //     method:"post",
        //     headers:{
        //         "content-type":"application/json"
        //     },
        //     body:JSON.stringify(emp)
        // }).then((res1)=>{
        //     res1.json().then((res2)=>{
        //         console.log(res2)
        //     })
        // })
        axios.post("http://localhost:3000/employee",emp).then((res)=>{
            console.log(res)
        })
    }
  return (
    <div>
        <h2>Add New Employee</h2>
        <form onSubmit={newemp}>
            <input type='text' placeholder='Enter Your Name'
            value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <input type='email' placeholder='Enter Email Address'
            value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <input type='text' placeholder='Enter Your City'
            value={city} onChange={(e)=>setCity(e.target.value)}/><br/><br/>
            <input type='text' placeholder='Enter Phone Number'
            value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/><br/>
            <button type='submit'>ADD EMPLOYEE</button>
        </form>
    </div>
  )
}

export default Postmethod
