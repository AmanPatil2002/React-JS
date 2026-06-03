import React, { useContext } from 'react'
import { Globinfo } from '../App'  // The useContext hook is used to access the values provided by the Globinfo context in the Superchild component. By using useContext(Globinfo), we can access the values of tcolor, bcolor, and chngcrs that were provided in the App component's Globinfo.Provider. This allows us to use these values in the Superchild component without having to pass them down as props through multiple levels of components.

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