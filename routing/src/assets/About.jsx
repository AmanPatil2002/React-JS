
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate=useNavigate()
  let courses={
    id:101,
    name:"Web Full Stack",
    duration:"6 Months",
    fees:35000
  }
  function navto(url)
  {
    // let user="xyz"
    // if(user)
    // navigate('/Product')
    // else
    // navigate('/Contact')
    navigate(url,{state:courses})
  }
  return (
    <div>
      <button onClick={()=>navto('/Product')}>Go To Products Page</button>
      <button onClick={()=>navto('/Contact')}>Go To Contact Page</button>
    </div>
  )
}

export default About
