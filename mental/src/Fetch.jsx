import { useState  } from "react";

export default function Fetch() {
    const [url, setUrl] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])


    function handleSubmit(e) {
        e.preventDefault();
        console.log(url)
        console.log('clicked')
        fetchUrl(url)
        setUrl('')
    }

    async function fetchUrl(text) {
            setLoading(true)
        try {
            const res = await fetch(`${text}`)

            if(!res.ok) throw new Error(`The fetching of ${text} Failed....`)
            
            const data = await res.json()
            setPosts(data)
        }catch(err) {
            setError(err.message)
        }finally{
            setLoading(false)
        }

        return (
            console.log(posts)
            
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input style={{ width: '350px', height: '30px', fontSize: '1.5rem'}}
                    type="text" 
                    placeholder="Enter your URL..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                <button type="submit">
                    Fecth
                </button>
            </form>
            <button onClick={() => fetchUrl(url)}>
                Refresh
            </button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}


            <div>{posts.map((post) => (
                <div style={{ border: '2px solid white', margin: '2rem' }}>
                    <ul style={{ textDecoration: 'null' }}>
                        <li key={post.id}>
                            <p>{post.userId}</p>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </li>
                    </ul>
                </div>
            ))}</div>

        </div>
    )
}