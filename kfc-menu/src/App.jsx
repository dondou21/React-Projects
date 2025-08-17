import { useState } from 'react'
import './App.css'
import Menu from './Menu.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>KFC Menu</h1>
        <Menu />
      </div>
    </>
  )
}

export default App
