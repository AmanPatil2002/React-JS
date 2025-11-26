import React, { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  const [name,setName] = useState("Sevenmentor")
  const chngcnt=()=>{
    setCount(count-1)
  }
  function multi(){
    if(count>=5){
      setCount(count*2)
    }
  }
  return (
    <>
    <h1>UseState Hook</h1>
    <h2>counter : {count}</h2>
    <h2>Name : {name}</h2>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>chngcnt()}>Decrement</button>
    <button onClick={()=>multi()}>Multiply</button>
    <button onClick={()=>setName("I.T. Education")}>Change name</button>
    </>
  )
}

export default App