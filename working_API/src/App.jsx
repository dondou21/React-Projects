import { useState, useEffect } from "react";

function App() {
  const [users, setUssers] = useState([])

  useEffect(() => {
    fetch(" https://random-data-api.com/api/users/random_user?size=10")
    .then(res => res.json())
    .then(data => setUssers(data))
    .catch(err => console.log("Fetchin API failled", err))
  })

  console.log(users)
  return (
    <div>
      <h1>Hey</h1>
      <h2>{users}</h2>
    </div>
  )
}

export default App;