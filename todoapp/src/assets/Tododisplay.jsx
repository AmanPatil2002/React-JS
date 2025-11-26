import React from 'react'
import { MdDelete } from "react-icons/md";

function Tododisplay(props) {
  return (
    <div>
        <li>
            {props.t}
            <MdDelete style={{color:"red"}} onClick={()=>props.deltodo(props.index)}/>
        </li>
    </div>
  )
}

export default Tododisplay