import React from 'react'

function Props(props) {
  return (
    <>
      <div>
        <h1>name :{props.naam}</h1>
        <h2>favColor :{props.favColor}</h2>
        <h3>hobby :{props.hobby} </h3>
      </div>

    </>
  )
}

export default Props