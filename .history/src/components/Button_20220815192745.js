import React from 'react'

const Button = () => {
  return (
    <div>
      <button onClick={incrementNum}>Increment</button>
      <button onClick={decrementNum}>Decrement</button>
    </div>
  )
}

export default Button