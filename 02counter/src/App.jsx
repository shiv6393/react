import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=15
  let [  counter,setCounter]=useState(15)
  let [message,setMassage]=useState('')
  const addValue=() => {
    if(counter>=20){
      setMassage("⚠️ connot go beyond 20")
    }
    else setCounter(prevCounter=>prevCounter+1)
    
  }
  const removeCounter=() =>{
    if(counter<=0)setMassage("cannot go under 0")
    else setCounter(counter-1)
  }
  return (
    <>
      <h1>chai aur code</h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeCounter}>remove value {counter}</button>
      <p>footer:{counter}</p>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </>
  )
}

export default App
