import React from 'react'
import Props from './components/Props'
import Card from './components/Card'

function App() {
  return (
    <>
      <Props naam = "rahul" favColor = "white" hobby = "gym"/>
      {/* <Props naam = "priya" favColor = "blue" hobby = "cricket"/>
      <Props naam = "raju" favColor = "yellow" hobby = "painting"/>
      <Props naam = "neha" favColor = "green" hobby = "singing"/>
      <Props naam = "aman" favColor = "red" hobby = "dance"/> */}

      <Card username= "rahul" btnText='vist me'/>
      <Card username= "neha" btnText='click me'/>
    </>
    
  )
}

export default App