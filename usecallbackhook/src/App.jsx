import { useCallback, useState } from 'react'
import './App.css'
import Child from './assets/Child'

function App() {
  const [count,setCount] = useState(0)
  const [qty,setQty] = useState(5)
  const display=useCallback(()=> 
    //useCallback is used to memoize the function and it will only re-render when the dependencies change. In this case, there are no dependencies, so it will only re-render when the component re-renders.
  {
    console.log('Display function called')
  },[])
  return (
    <>
    <h1>Use Callback hook</h1>
    <h3>Counter : {count}</h3>
    <Child qty={qty} display={display}/>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default App