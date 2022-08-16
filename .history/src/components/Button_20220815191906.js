
GabbAr Patil
hace 1 año
challenge accepted ....
code with no design 

import React, { useState } from 'react'

const App = () => {
  const [num, changeNum] = useState(0);

  const incrementNum = () => {
    changeNum(num+1)
  }
  
  const decrementNum = () => {
    if (num-1 < 0){
      alert(`you can't decrease than 0`)
    }else{
      changeNum(num-1)
    }

  }

  return (
    <>
      <h1>{num}</h1>
      <button onClick={incrementNum}>Increment</button>
      <button onClick={decrementNum}>Decrement</button>
    </>
  )
}