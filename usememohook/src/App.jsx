import React, { useMemo, useState } from "react"; 
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [qty, setQty] = useState(5);
  const [item, setItem] = useState(2);
  function chngcnt() {
    console.log("Counter called");
    setCount(count + 1);
  }
  function chngqty() {
    console.log("Quality called");
    setQty(qty + 1);
  }
  function chngitm() {
    console.log("Item called");
    setItem(item + 1);
  }
  useMemo(() => {  // useMemo hook is used to memoize the result of a function and only recompute it when the dependencies change. In this case, it will only log "Components called" when any of the state variables (count, qty, item) change.
    console.log("Components called");
  });
  return (
    <>
      <h1>Use memo hook</h1>
      <h3>Counter : {count}</h3>
      <h3>Quality : {qty}</h3>
      <h3>Item : {item}</h3>
      <button onClick={() => chngcnt()}>Change Count</button>
      <button onClick={() => chngqty()}>Change Quality</button>
      <button onClick={() => chngitm()}>Change Item</button>
    </>
  );
}

export default App;
