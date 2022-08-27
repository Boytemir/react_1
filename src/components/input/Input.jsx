import React, { useState } from 'react';

const Input = () => {
    const [input, setInput] = useState('')
  return (
    <div className='input'>
        <p className='input-alt'>Value: {input}</p>
        <input type="text" value={input} onChange= {event => setInput(event.target.value)} />
    </div>
  )
}

export default Input