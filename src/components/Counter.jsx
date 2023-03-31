import React, { useState } from 'react';


const Counter = ()=> {
    const [count, setCount ] = useState(0)

    const increase = (prevCount) => setCount(count + 1)
    const decrease = (prevCount) => setCount(count - 1)


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
    </div>
  )
}

export default Counter