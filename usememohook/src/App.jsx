
  // useMemo hook is used to memoize the result of a function and only recompute it when the dependencies change. 

import { useMemo, useState } from "react";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);
  const [qty, setQty] = useState(5);
  const square = useMemo(() => {
    console.log("Calculating square...");
    return count * count;
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <h2>Qty: {qty}</h2>
      <h2>Square: {square}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setQty(qty + 1)}>Qty</button>
    </>
  );
}
export default App;