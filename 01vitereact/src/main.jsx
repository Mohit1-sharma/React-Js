import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return <div>
    <h1>custom App</h1>
  </div>
}
const username = 'asdrdb'

const reactElem = React.createElement('a',{href : "https://www.google.com", target : "_blank"},'click me to output',username)

createRoot(document.getElementById('root')).render(
  
  reactElem
  
)
