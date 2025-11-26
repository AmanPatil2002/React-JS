import React, { createContext, useState } from 'react'
import './App.css'
import Firstchild from './assets/Firstchild.jsx'
import Secondchild from './assets/Secondchild.jsx'

export const Globinfo=createContext()

function App() {
  const [tcolor,setTcolor]=useState("purple")
  const [bcolor,setBcolor]=useState("pink")
  const [course,setCourse]=useState("Java Full Stack")
  function chngcrs(c){
    console.log(c)
    setCourse(c)
  }
  return (
    <>
    <Globinfo.Provider value={{tcolor:tcolor,bcolor:bcolor,chngcrs:chngcrs}}>
      <h1 style={{color:tcolor}}>UseContext hook</h1>
      <h2>Course Name : {course}</h2>
      <Firstchild/>
      <Secondchild/>
    </Globinfo.Provider>
    </>
  )
}

export default App