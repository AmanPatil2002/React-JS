import { useEffect, useState } from "react";
import "./App.css";
import Child from "./assets/Child";

function App() {
  const [count, setCount] = useState(0);
  const [qty, setQty] = useState(5);
  // useEffect hook is used to perform side effects in function components. In this case, it will log "Component called" every time the count state variable changes.

  //useEffect accepts two arguments.second is optional
  //useEffect(<Funtion>,<dependency>)
  useEffect(() => {console.log("No dependency is passed");});//It runs every time the component renders.
  //useEffect(() => {console.log("An empty array is passed");},[]);//Runs only once when the component mounts.
  //useEffect(() => {console.log("Props or state value is passed");},[count]);//It runs every time when state/props change 
  return (
    <>
      <h1>App Component</h1>
      <h2>Counter : {count}</h2>
      <Child qty={qty} setQty={setQty} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;
