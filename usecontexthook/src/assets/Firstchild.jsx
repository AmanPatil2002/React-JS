import { useContext } from 'react'
import { Globinfo } from '../App'
import Superchild from './Superchild'

function Firstchild() {
  const {tcolor,bcolor}=useContext(Globinfo)
  return (
    <div>
      <h2 style={{color:bcolor,backgroundColor:tcolor}}>First child</h2>
      <Superchild/>
    </div>
  )
}

export default Firstchild