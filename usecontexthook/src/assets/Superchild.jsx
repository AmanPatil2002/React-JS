import React, { useContext } from 'react'
import { Globinfo } from '../App'

function Superchild() {
  const {tcolor,bcolor,chngcrs}=useContext(Globinfo)
  let course="Web Full Stack"
  return (
    <div>
      <h2 style={{color:tcolor,backgroundColor:bcolor}}>Super Child</h2>
      <button onClick={()=>chngcrs(course)}>Change Course</button>
    </div>
  )
}

export default Superchild