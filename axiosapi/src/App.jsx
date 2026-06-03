import React from 'react'
import Axiosgetmethod from './assets/Axiosgetmethod'  //importing the component to fetch data using get method
import Axiospostmethod from './assets/Axiospostmethod' //importing the component to fetch data using post method
import './App.css'

function App() {
  return (
    <div>
      <h1>Fetching API with Axios</h1>
      <Axiosgetmethod/>
      {/* <Axiospostmethod/> */}
    </div>
  )
}

export default App