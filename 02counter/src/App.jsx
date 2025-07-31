import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  //let counter = 15
  const addValue = ()=>{
    ;
    if(counter < 20){
      counter = counter + 1
      setCounter(counter)
    } else{
      alert('adding limit reached')
      return false;
    }
    

    
    
  }

  const decreaseValue = ()=>{
    if(counter > 0){
       counter = counter -1
    setCounter(counter)
    } else{
      alert('decreasing limit reached')
      return false
    }
   
   
   
  }
  //  this is use case of use state, basically this is a container which take two parameter {counter, setcounter} =>
    // counter hold the value and setcounter set the value by using same varibale we can define logic and use the setcounter to implent chnages in ui
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick = {addValue}>Add value</button>
      <br></br>
      <button onClick = {decreaseValue}>Decrease Value</button>

    </>
  )
}

export default App
