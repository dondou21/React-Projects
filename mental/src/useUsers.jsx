import { useState, useEffect } from "react";

export default function useUsers() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    
    useEffect(() => {
        const fecthUsers = async() => {

            setLoading(true);
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
    
                if(!res.ok) {
                    throw new Error(`Fetching  failled.... `)
                }
                const data = await res.json()
                setUsers(data)
                
            }catch(err) {
                setError(err.message)
            }finally {
                setLoading(false)
            }
        }
        fecthUsers()
    },[])
    return {users, error, loading}
}