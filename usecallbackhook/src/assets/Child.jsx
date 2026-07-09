import { memo } from "react";

function Child({ qty, display }) {
  console.log("Child component called");

  return (
    <>
      <h3>Qty: {qty}</h3>
      <button onClick={display}>Display</button>
    </>
  );
}

export default memo(Child);