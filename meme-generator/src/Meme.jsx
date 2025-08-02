import {useState, useEffect} from 'react'

export default function Meme(props) {
    const [firstMeme, setFirstMeme] = useState("")
    const [secondMeme, setSecondMeme] = useState("")

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => {
        const memes = data.data.memes
        const randomMeme = memes[Math.floor(Math.random() * memes.length)]
        const randomMeme2 = memes[Math.floor(Math.random() * memes.length -1)]
        setFirstMeme(randomMeme.url)
        setSecondMeme(randomMeme2.url)})
        .catch(err => console.log("Meme Fecthing Failled", err))
    },[props.text1, props.text2])

    return (
        <>
          <h1>The memes component</h1>
          <p>{props.text1}</p>
          <p>{props.text2}</p>
          {firstMeme && <img src={firstMeme} />}
          {secondMeme && <img src={secondMeme} />}
        </>
    )
}