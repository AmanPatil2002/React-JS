import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice'
// import styles from './Counter.module.css'

export default function Employee() {
  const e = useSelector((state) => state.counter.emp) // useSelector is a hook provided by the react-redux library that allows you to extract data from the Redux store state. In this case, it is accessing the 'counter' slice of the state and retrieving the 'emp' property, which is expected to be an array of employee objects.
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Employee Information</h2>
      <ul>
        {
            e.map((item,index)=>{
                return(
                    <li key={index}>
                        <span>{item.name}</span>
                        <span>{item.city}</span>
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