import React from 'react'
import { useState } from 'react'



const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = (()=>{
setCount(count + 1)
  })

  return (
    <>
      <div>Counter: {count}</div>
      <button type='button' onClick={handleClick}>Click</button>
    </>
  )
}

export default Counter