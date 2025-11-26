import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Product() {
  let navigate=useNavigate()
  const [cart,setCart]=useState([])
  let prod=[
    {
      id:1,
      name:"Pizza",
      price:350
    },
    {
      id:2,
      name:"Pasta",
      price:250
    },
    {
      id:3,
      name:"Burger",
      price:200
    }
  ]
  function addtocart(p)
  {
    // setCart([...cart,p])
    cart.push(p)
    navigate('/Cart',{state:cart})
  }
  return (
    <div>
      <Container>
      {
        prod.map((p,i)=>{
          return (
            <div key={i} className='card w-25 my-4 text-center'>
              <h2>{p.name}</h2>
              <h4>$ {p.price}</h4>
              <button onClick={()=>addtocart(p)}>Add to Cart</button>
              </div>
          )
        })
      }
      </Container>
    </div>
  )
}

export default Product