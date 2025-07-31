import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([])

 
  
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newTodo = formData.get("todo")
    setTodo(prev => [...prev, newTodo])
    event.target.reset()
  } 
  
  const todoList = todo.map(item => 
    <li key={item}>{item}</li>
  )

  return (
    <>
      <div className='container'> 
        <h1>ToDos</h1>
        <form onSubmit={handleSubmit} className='inputTodos' >
            <input type="text" placeholder='Add todo...' name="todo" />
            <button>+</button>
        </form>
        
        <ul className='todoList'>
          {todoList}
        </ul>
      </div>
    </>
  )
}

export default App
