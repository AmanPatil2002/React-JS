import React from 'react'
import { useLocation } from 'react-router-dom'

function Cart() {
    const location=useLocation()
    console.log(location.state)
  return (
    <div>
        {
            location.state.map((p,i)=>{
                return (
<div className='d-flex' key={i}>
            <h2>{p.name}</h2>
            <h2>{p.price}</h2>
        </div>
                )
            })
        
}
    </div>
  )
}

export default Cart
