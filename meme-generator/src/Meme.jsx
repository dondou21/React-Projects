import {useState, useEffect} from 'react'

export default function Meme(props) {
    const [firstMeme, setFirstMeme] = useState("")
    const [secondMeme, setSecondMeme] = useState("")

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setFirstMeme(data))
        .catch(err => console.log("Meme Fecthing Failled", err))
    },[])

    console.log(firstMeme.data.memes)
    return (
        <>
          <h1>The memes component</h1>
          <p>{props.text1}</p>
          <p>{props.text2}</p>
        </>
    )
}