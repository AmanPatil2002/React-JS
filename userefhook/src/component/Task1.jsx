import { useRef} from "react" 

function Task1() {
    const name = useRef();
    //useRef is a hook that allows you to create a mutable reference that persists across re-renders. It can be used to access and manipulate DOM elements directly, store mutable values, or keep track of previous values without causing re-renders.
    const age = useRef();

    function check(){
      name.current.value="Aman"
      age.current.value="22"
    }
    return (
    <div>
      <input type="text" ref={name} placeholder="Enter Name" />
      <input type="text" ref={age} placeholder="Enter Age" />
      <button onClick={check}>Check</button>
    </div>
  )
}

export default Task1