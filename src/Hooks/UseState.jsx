import React from 'react'
import { useState } from 'react'

const UseState = () => {
const [text,setText] = useState('React Hooks');

  const handleClick = () => {
      if(text==='React Hooks')setText('This is useState');
      else setText('React Hooks');
  }

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click me to change</button>
    </div>
  )
}

export default UseState
