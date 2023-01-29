import React from 'react'
import { useState } from 'react'

const App = () => {
  const [text,setText] = useState('React Hooks');

  const handleClick = () => {
      setText('This is useState');
  }

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click me to change</button>
    </div>
  )
}

export default App
