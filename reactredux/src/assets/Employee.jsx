import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from '../counterSlice.jsx'
function Employee() {
    const e = useSelector((state) => state.counter.emp)
        const dispatch = useDispatch()
  return (
    <div>
        <h2>Employee Information</h2>
        <ul>
            {
                e.map((item,index)=>{
                    return (
                        <li key={index}>
                            <span>{item.name} | </span>
                            <span>{item.city} | </span>
                            <span>{item.phone}</span>
                            <span><button>Delete</button></span>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Employee
