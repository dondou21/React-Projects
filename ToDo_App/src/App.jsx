import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState()

  return (
    <>
      <div className='container'> 
        <h1>ToDos</h1>
        <div className='inputTodos'>
        <input type="text" value={todo} placeholder='Add todo...' />
        <button type="submit">+</button>
        </div>
      </div>
    </>
  )
}

export default App
