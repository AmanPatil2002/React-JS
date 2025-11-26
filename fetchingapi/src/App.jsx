import React from 'react'
import Getmethod from './assets/Getmethod'
import Postmethod from './assets/Postmethod'
import './App.css'

function App() {
  return (
    <>
    <h1>Fetching of API</h1>
    <div className='div1'>
      <Getmethod style={{marginRight:"50px"}}/>
      <Postmethod/>
    </div>
    </>
  )
}

export default App