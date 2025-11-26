import React, { useRef } from 'react'
import './App.css'

function App() {
  const inputref=useRef()
  const imgref=useRef()
  function chng(){
    inputref.current.value="React JS"
    inputref.current.style.color="brown"
    inputref.current.style.fontSize="40px"
    inputref.current.style.backgroundColor="aqua"
    imgref.current.src="./1.jpeg"
    imgref.current.height="200"
    imgref.current.width="300"
  }
  return (
    <>
    <input type='text' ref={inputref} placeholder='Enter Name'/><br></br>
    <img src='./2.jpeg' height={100} width={150} ref={imgref}/><br></br>
    <button onClick={chng}>Change</button>
    </>
  )
}

export default App