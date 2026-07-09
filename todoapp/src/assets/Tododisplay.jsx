
function Tododisplay(props) {//pass props
  return (
    <div>
        <li>
            {props.t}
            <button onClick={()=>props.deltodo(props.i)}>Delete</button>
        </li>
    </div>
  )
}

export default Tododisplay