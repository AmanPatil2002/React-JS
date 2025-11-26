import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Getmethod() {
    let [emp,setEmp]=useState([])
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [city,setCity]=useState("")
    const [phone,setPhone]=useState("")
    const [id,setId]=useState(null)
    function getemp()
    {
        // fetch("http://localhost:3000/employee").then((res1)=>{
        //     res1.json().then((res2)=>{
        //         console.log(res2)
        //         setEmp(res2)
        //         setId(res2[0].id)
        //         setName(res2[0].name)
        //         setEmail(res2[0].email)
        //         setCity(res2[0].city)
        //         setPhone(res2[0].phone)
        //     })
        // })
        axios.get("http://localhost:3000/employee").then((res)=>{
            setEmp(res.data)
        })
    }
    useEffect(()=>{
        getemp()
    },[])
    function selemp(e)
    {
        setId(e.id)
        setName(e.name)
        setEmail(e.email)
        setCity(e.city)
        setPhone(e.phone)
    }
    function editemp(id)
    {
        let emp={name,email,city,phone,id}
        // fetch(`http://localhost:3000/employee/${emp.id}`,{
        //     method:"put",
        //     headers:{
        //         "content-type":"application/json"
        //     },
        //     body:JSON.stringify(emp)
        // }).then((res1)=>{
        //     res1.json().then((res2)=>{
        //         console.log(res2)
        //         getemp()
        //     })
        // })
        axios.put(`http://localhost:3000/employee/${emp.id}`,emp).then((res)=>{
            console.log(res)
        })
    }
    function delemp(e)
    {
        // fetch(`http://localhost:3000/employee/${e.id}`,{
        //     method:"delete",           
        // }).then((res1)=>{
        //     res1.json().then((res2)=>{
        //         console.log(res2)
        //         getemp()
        //     })
        // })
        axios.delete(`http://localhost:3000/employee/${e.id}`).then((res)=>{
            console.log(res)
            getemp()
        })
    }

  return (
    <div>
        <h2>Employee Information</h2>

        <table border={2}>
            <thead>
                <tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>CITY</th><th>PHONE</th><th>BUTTONS</th></tr>
            </thead>
            <tbody>
                {
                    emp.map((e,i)=>{
                        return (
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.city}</td>
                                <td>{e.phone}</td>
                                <td>
                                    <button onClick={()=>selemp(e)}>Edit</button>
                                    <button onClick={()=>delemp(e)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <h2>Update Employee Information</h2>
        <form onSubmit={()=>editemp(id)}>
            <input type='text' placeholder='Enter Your Name'
            value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <input type='email' placeholder='Enter Email Address'
            value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <input type='text' placeholder='Enter Your City'
            value={city} onChange={(e)=>setCity(e.target.value)}/><br/><br/>
            <input type='text' placeholder='Enter Phone Number'
            value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/><br/>
            <button type='submit'>EDIT EMPLOYEE</button>
        </form>
    </div>
  )
}

export default Getmethod
