import axios from 'axios'

function Axiospostmethod() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    function editdata(id){
        let u={name,email,phone,id}
        axios.put(`http://jsonplaceholder.typicode.com/users/${u.id}`,JSON.stringify(u)).then((res)=>{
            console.log(res)
        })
    }
    function deldata(id){
        axios.delete(`http://jsonplaceholder.typicode.com/users/${u.id}`,JSON.stringify(u)).then((res)=>{
            console.log(res)
        })
    }
  return (
    <div>
        <h2>Add New Data</h2>
        <form onSubmit={addata}>
        <input type='text' placeholder='Enter Your Name'
            value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/><br/>
            <input type='email' placeholder='Enter Email Address'
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br/><br/>
            <input type='text' placeholder='Enter Phone Number'
            value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <br/><br/>
            <button type='submit'>ADD</button>
            <button onClick={editdata}>edit</button>
            <button onClick={(e)=>deldata(e)}>del</button>
        </form>
    </div>
  )
}

export default Axiospostmethod