import React, { useState } from 'react'

function Userform() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    const [radio1,setRadio1]=useState(false)
    const [radio2,setRadio2]=useState(false)
    const [check1,setCheck1]=useState(false)
    const [check2,setCheck2]=useState(false)
    const [check3,setCheck3]=useState(false)
    const [state,setState]=useState("")
    function newuser(e)
    {
        e.preventDefault()
        let user={name,email,address,radio1,radio2,check1,check2,check3,state}
        console.log(user)
    }
  return (
    <div>
        <h1>User Information Form</h1>
        <form onSubmit={newuser}>
            <input type='text' placeholder='Enter Name' value={name}
            onChange={(e)=>setName(e.target.value)}/><br/><br/>

            <input type='email' placeholder='Enter Email Address' value={email}
            onChange={(e)=>setEmail(e.target.value)}/><br/><br/>

            <textarea rows={5} cols={20} placeholder='Enter your address' value={address}
            onChange={(e)=>setAddress(e.target.value)}></textarea><br/><br/>

            <label>Gender:</label>
            <input type='radio' name='r1' value={radio1}
            onChange={(e)=>setRadio1(e.target.checked)}/>Male
            <input type='radio' name='r1' value={radio2} 
            onChange={(e)=>setRadio2(e.target.checked)}/>Female<br/><br/>

            <label>Hobbies:</label>
            <input type='checkbox' name='ch1' value={check1} 
            onChange={(e)=>setCheck1(e.target.checked)}/>Reading
            <input type='checkbox' name='ch2' value={check2} 
            onChange={(e)=>setCheck2(e.target.checked)}/>Coding
            <input type='checkbox' name='ch2' value={check3} 
            onChange={(e)=>setCheck3(e.target.checked)}/>Singing<br/><br/>
            
            <label>State:</label>
            <select value={state}
            onChange={(e)=>setState(e.target.value)}>
                <option>Maharashtra</option>
                <option>Punjab</option>
                <option>Gujrat</option>
                <option>Rajasthan</option>
                <option>A.p.</option>
            </select><br/><br/>
            <button type='submit'>New User</button>
        </form>
    </div>
  )
}

export default Userform