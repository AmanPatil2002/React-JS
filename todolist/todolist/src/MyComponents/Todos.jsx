
import TodoItem from '../MyComponents/TodoItem';


const Todos = (props) => { //props is used to get the data from the parent component
  let myStyle={
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length===0? "No Todos to display":
        props.todos.map((todo)=>{
          return (
          <div key={todo.sno}> 
            <TodoItem todo={todo} onDelete={props.onDelete}/><hr/>
          </div>
          )
        })
      }
    </div>
  )
}

export default Todos

