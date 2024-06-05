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

  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button>Remove Value</button>
    </>
  )
}

export default App
