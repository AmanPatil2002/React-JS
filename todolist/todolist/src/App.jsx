import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer';
import './App.css'
import { useState , useEffect } from 'react';
import { Addtodo } from './MyComponents/Addtodo';

function App() {
  let iniTodo;
  if (localStorage.getItem("todos") === null) {
    iniTodo = [];
  } else {
    iniTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("I am Delete ",todo);
      setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc);    
    let sno; 
    if(todos.length===0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }           
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);


  }

  const [todos, setTodos] = useState(iniTodo);
  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
    );
}

export default App
