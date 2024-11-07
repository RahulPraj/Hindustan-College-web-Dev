import React, { useState } from 'react'

function UseState() {
    // let counter = 5;
    let [counter, setCounter] = useState(0);

    const addValue = ()=>{
        console.log("value baad rahi hai");
        setCounter(counter+1);
        console.log(counter);
    }

    const removeValue = ()=>{
        console.log("value kaam rahi hai");
         setCounter(counter-1);
        console.log(counter);
    }
  return (
    <div>
        <h1>Counter App</h1>
        <h2>counter : {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>remove value</button>
    </div>
  )
}

export default UseState