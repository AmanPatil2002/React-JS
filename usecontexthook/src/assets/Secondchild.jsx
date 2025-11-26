import React, { useContext } from 'react'
import { Globinfo } from '../App'

function Secondchild() {
  const {tcolor,bcolor}=useContext(Globinfo)
  return (
    <div>
      <h2 style={{color:tcolor,backgroundColor:bcolor}}>Secondchild</h2>
    </div>
  )
}

export default Secondchild