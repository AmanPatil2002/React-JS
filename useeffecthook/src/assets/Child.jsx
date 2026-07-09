
function Child(prop) {
  return (
    <div>
        <h2>Child Component</h2>
        <h3>Quantity : {prop.qty}</h3>
        <button onClick={()=>prop.setQty(prop.qty*2)}>Change Qty</button>
    </div>
  )
}

export default Child