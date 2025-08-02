import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[] )

  const userData = users.map((user) => {
    return (
      <li key={user.id} >{user.name}</li>
      )
  })

    console.log(data)
    console.log(788)
  return (
    <>
      <div>
        <h1>User's Name</h1>
        <ul>
          {userData}
        </ul>
      </div>
    </>
  )
}

export default App
