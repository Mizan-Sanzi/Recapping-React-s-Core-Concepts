import { useState } from 'react'
import Posts from './posts'
import './App.css'
import Post from './post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Recapping React's <br/> Core Concepts</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data [Use Effect]</li>
      </ol>
      <hr/>
      <Posts></Posts>
    </>
  )
}

export default App
