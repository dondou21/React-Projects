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

  function removeTodo(index) {
    setTodo(prev => [...prev.slice(0,index), ...prev.slice(index + 1)])
  }
  
  const todoList = todo.map((item, index) => 
      <div className='todo-box'>
        <input className='checklist' type="checkbox" name={item} id={item} />
        <p className='todo-text'>{item}</p>
        <i className="material-icons" onClick={() => removeTodo(index)}>delete</i>
      </div>
      
  )

  return (
    <>
      <div className='container'> 
        <h1>ToDos</h1>
        <form onSubmit={handleSubmit} className='inputTodos' >
            <input type="text" placeholder='Add todo...' name="todo" />
            <button>+</button>
        </form>
        <div className='todoList' >
          {todoList}
        </div>
      </div>
    </>
  )
}

export default App
