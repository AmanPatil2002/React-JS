import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params=useParams()
    console.log(params)
  return (
    <div>
        <h1>This is {params.name}'s Page</h1>
    </div>
  )
}

export default User