import React, { useState } from 'react'

function Counter() {
  const[counter,setCounter]=useState(0)
  function handleIncrement(){
    // console.log("handleIncrement")
    setCounter(counter+1)
  }
  function handleDecrement(){
    // console.log("handleDecrement")
    setCounter(counter-1)
  }

  function handleReset(){
    // console.log("handleReset")
    setCounter(0)
  }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <input type="text" value={counter}/>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleReset}>reset</button>
            </div>
            <div className="col-4"></div>
        </div>
      </div>
    </div>
  )
}

export default Counter
