import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axiosgetmethod() {
    conat [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.tyicode.com/users").then((res)=>{
            console.log(res.data)
            setUsers(res.data)
        })
    })
  return (
    <div>
        {
            users.map((u,i)=>{
                return(
                    <div  key={i}>
                        <h3>{u.name}</h3>
                        <h3>{u.email}</h3>
                        <h3>{u.phone}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Axiosgetmethod