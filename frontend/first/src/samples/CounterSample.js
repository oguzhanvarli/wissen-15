import React, { useState } from 'react'

function CounterSample() {
  const [counter, setCounter] = useState(0)

  const increment = () =>{
    if(counter < 10) setCounter(counter + 1)
  }
  const decrement = () => {
    if(counter > 0) setCounter(counter - 1)
  }


  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}>Azalt</button>
      <button onClick={increment} disabled={counter === 10 ? true : false} >Arttır</button>
    </div>
  )
}

export default CounterSample