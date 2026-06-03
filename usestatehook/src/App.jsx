import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sevenmentor");
  const chngcnt = () => {
    // chngcnt is a function that is defined to decrement the count state variable. It checks if the count is greater than or equal to 1 before decrementing it. This is likely to prevent the count from going negative.
    setCount(count - 1);
  };
  function multi() {
    if (count >= 5) {
      setCount(count * 2);
    }
  }
  return (
    <>
      <h1>UseState Hook</h1>
      <h2>counter : {count}</h2>
      <h2>Name : {name}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => chngcnt()}>Decrement</button>
      <button onClick={() => multi()}>Multiply</button>
      <button onClick={() => setName("I.T. Education")}>Change name</button>
    </>
  );
}

export default App;
