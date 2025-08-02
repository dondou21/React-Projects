import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?size=10")
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.log("Fetching API  failled", err))
  }, [])

  console.log(users)

  const usersData = users.map((user) => {
    return <li key={user.id} >{user.username}</li>
  })

  return (
    <div>
      <h1>User's data</h1>
      <ul>
        {usersData}
      </ul>
    </div>
  )
}

export default App;