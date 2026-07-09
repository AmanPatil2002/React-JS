import { useState } from 'react'
import './App.css'
import Todoinput from './assets/Todoinput'
import Tododisplay from './assets/Tododisplay'

function App() {
  const[todolist,setTodolist]=useState([])

  function addtodo(inputtask){
    console.log(inputtask);
    setTodolist([...todolist,inputtask])
    //spread operator is used to add the new task to the existing list of tasks
    console.log(todolist);
  }
  function deltodo(i){
    let newtodolist=[...todolist] 
    newtodolist.splice(i,1)
    setTodolist(newtodolist)
  }
  return (
    <>
      <Todoinput addtodo={addtodo}/>
      {
        todolist.map((t,i)=>{
          return(
            <Tododisplay key={i} t={t} index={i} deltodo={deltodo}/>
          )
        })
      }
    </>
  )
}

export default App