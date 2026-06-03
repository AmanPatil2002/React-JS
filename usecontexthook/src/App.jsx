import { createContext, useState } from 'react' // The createContext function is used to create a new context object, which can be used to share data across components without having to pass props down manually at every level.
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