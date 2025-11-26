import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { cartState } from './Context';
function Filters() {
  const {productdispatch,productstate:{stock,sort}}=cartState()
  return (
    <div>
        <Container>
            <Form.Check
            type='radio'
            label="Ascending"
            name='r1'
            className='mt-4'
            onChange={()=>{
              productdispatch({
                type:"sortbyprice",
                payload:"ascending"
              })
            }}
            checked={sort==="ascending"? true:false}
            />
            <Form.Check
            type='radio'
            label="Descending"
            name='r1'
            onChange={()=>{
              productdispatch({
                type:"sortbyprice",
                payload:"descending"
              })
            }}
            checked={sort==="descending"? true:false}
            />
            <Form.Check
            type='checkbox'
            label="Out of Stock"
            name='ch1'
            className='mt-4'
            onChange={()=>{
              productdispatch({
                type:"filterbystock"
              })
            }}
            checked={stock}
            />
            <Button variant='secondary' className='mt-4' 
            onClick={()=>{
              productdispatch({
                type:"clearfilters"
              })
            }}
            >Clear Filters</Button>
        </Container>
    </div>
  )
}

export default Filters