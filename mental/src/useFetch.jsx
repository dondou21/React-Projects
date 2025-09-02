import { useState, useEffect } from 'react'

export default function useFetch(url) {
     const [data, setData] = useState([])
     const [error, setError] = useState(false)
     const [errMessage, setErrMessage] = useState('')

     useEffect(() => {
     async function fetching(url) {

          try {
             const res = await fetch(url)
             if(!res.ok) {
               setError(true)
               throw new Error('Fetching failed...')
             }
             const post = await res.json()
             setData(post)
          } catch (err) {
               setErrMessage(err.message)
          }
          
     }

      fetching()
     },[url])


     return { data , error, errMessage}



} 