import React, { useEffect, useState } from 'react'

function UseEffect() {
    let [counter, setCounter] = useState(0);

    const addValue = ()=>{
        setCounter(counter+1);
    }

    // useEffect(function(){
    //     alert('haar baar render hone pr chalega');
    // },[])

    useEffect(function(){
        alert('haar baar render hone pr chalega');
    },[counter])

  return (
    <div>
        <h1>counter :{counter} </h1>
        <button onClick={addValue}>add</button>
    </div>
  )
}

export default UseEffect