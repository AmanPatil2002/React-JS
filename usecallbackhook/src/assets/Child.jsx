import React, { memo } from 'react'

function Child() {
    console.log("Child component called")
  return (
    <div>Child Component</div>
  )
}
export default memo(Child)