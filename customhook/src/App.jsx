import React, { useEffect } from 'react'
import './App.css'
import useCount from './assets/Usecount'

function App() {
  const [count,add,minus,rst]=useCount(0)
  useEffect(()=>{
    document.title="Number of hits on button "+count
  },[count])
  return (
    <>
      <h1>Custom Hook : {count}</h1>
      <button onClick={add}>Increment</button>
      <button onClick={minus}>Decrement</button>
      <button onClick={rst}>Reset</button>
    </>
  )
}

export default App