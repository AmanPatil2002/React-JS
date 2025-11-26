import React from 'react'
import { useLocation } from 'react-router-dom'

function Contact() {
  const location=useLocation()
  console.log(location)
  return (
    <div>
      {
        location.state ? (
          <>
            <h2>Course Name: {location.state.name}</h2>
            <h3>Duration: {location.state.duration}</h3>
            <h3>Fees: {location.state.fees}</h3>
          </>
        ) : (<h1>This is Contact Page</h1>)
      }
    </div>
  )
}

export default Contact