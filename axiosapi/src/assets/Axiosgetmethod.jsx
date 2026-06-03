import { useEffect, useState } from 'react'
import axios from 'axios' //importing axios to make API calls

function Axiosgetmethod() {
    const [users,setUsers]=useState([])
    useEffect(()=>{  //useEffect is used to fetch data from the API when the component is mounted. It will run only once when the component is mounted and will not run again unless the component is unmounted and mounted again.
        axios.get("https://jsonplaceholder.tyicode.com/users").then((res)=>{//making a get request to the API to fetch the list of users. The API will return a list of users in JSON format. The response will be stored in the res variable.
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