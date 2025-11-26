import React, { useEffect, useState } from 'react'
import { cartState } from './Context'
import { MdDelete } from "react-icons/md";
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
function Cart() {
    const {state:{cart},dispatch}=cartState()
    const [total,setTotal]=useState()
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price*curr.qty),0))
    },[cart])
  return (
    <div>
        <Container>
        <table className='table'>
            <thead>
                <tr><th>ID</th><th>NAME</th><th>PRODUCT</th><th>QUANTITY</th><th>PRICE</th><th>REMOVE</th></tr>
            </thead>
            <tbody>
                {
                    cart.map((c,i)=>{
                        return (
                            <tr key={i}>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td><img src={c.image} height={80} width={80} alt=''/></td>
                                <td>
                                    <Form.Select aria-label="Default select example" value={c.qty}
                                    onChange={(e)=>{
                                        dispatch({
                                            type:"changecartqty",
                                            payload:{
                                                id:c.id,
                                                qty:e.target.value
                                            }
                                        })
                                    }}>
                                        {
                                        [...Array(c.stock).keys()].map((q)=>{
                                            return (
                                                <option key={q+1}>{q+1}</option>
                                            )
                                        })
                                        }
                                    </Form.Select>
                                </td>
                                <td>{c.price}</td>
                                <td><MdDelete className='text-danger fs-4'
                                onClick={()=>dispatch({
                                    type:"REMOVEFROMCART",
                                    payload:c
                                  })}/></td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                <tr><td colSpan={2}>Subtotal : </td><td>{cart.length} items</td><td>Total :</td><td>₹{total}</td></tr>
            </tfoot>
        </table>
        </Container>
    </div>
  )
}

export default Cart