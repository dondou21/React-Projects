import { useState } from 'react';
import './app.css'

export default function App() {
  const [text, setText] = useState('')
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  
  // Fetching url function

  const fetchUrl = ( async (item) => {
    setLoading(true)
    try {
      const res = await fetch(item)

      if(!res.ok) throw new Error (`Fetching this ${item}  failled ....`)

      const data = await res.json()
      setPosts(data)
    }catch(err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  })
  
  /// Submit handling
  function handleSubmit(e) {
    e.preventDefault();
    fetchUrl(text)
    console.log(posts)
  }



  return (
    <div>
      <h1>Fetching with custom Hook</h1>
      <form onSubmit={handleSubmit}>
        <input style={{ width: '350px', height: '30px' }}
          type="text"
          placeholder='Enter your url...'
          value={text} 
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>
          Fetch      
        </button>
      </form>
      <div>
        <ul>
          { 
          posts.map((post) => (
        <li key={post.id}>
            <p>{post.title}</p>
        </li>
      )
      )
      }
        </ul>
      </div>
     
    </div>
  )
}