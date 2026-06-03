import {useEffect,useState} from "react"
import axios from "axios"

function Dashboard(){

 const [message,setMessage] = useState("")

 useEffect(()=>{

  const token = localStorage.getItem("token")

  axios.get(
   "http://localhost:5000/dashboard",
   {
    headers:{
     Authorization:`Bearer ${token}`
    }
   }
  )
  .then(res=>{
   setMessage(res.data.message)
  })
  .catch(()=>{
   window.location="/"
  })

 },[])

 return(
  <h1>{message}</h1>
 )

}

export default Dashboard