import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
 
 // const counter = 15;
  const addValue = ()=>{
    console.log("value Add", counter)
    setCounter(counter + 1)
  }
  const removeValue = ()=>{
    console.log("value remove", counter)
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Counter Value Increse Decrese</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
