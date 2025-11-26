import React from 'react'
import './App.css'
import Counter from './assets/Counter'
import Hocred from './assets/Hocred'
import Hocgreen from './assets/Hocgreen'
import Hocblue from './assets/Hocblue'

function App() {
  return (
    <>
      <h1>High Order Component</h1>
      {/* <Counter/> */}
      <Hocred cnt={<Counter/>}/>
      <Hocgreen cnt1={<Counter/>}/>
      <Hocblue cnt2={<Counter/>}/>
    </>
  )
}

export default App