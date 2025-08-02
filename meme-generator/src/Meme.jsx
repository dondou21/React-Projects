import {useState, useEffect} from 'react'
import './Meme.css'

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
        <div className='meme'>
            {firstMeme && (
                <div className="img-container">
                <img src={firstMeme} alt="Meme 1" />
                <p className="top-text">{props.text1}</p>
                </div>
            )}

            {secondMeme && (
                <div className="img-container">
                <img src={secondMeme} alt="Meme 2" />
                <p className="top-text">{props.text2}</p>
                </div>
            )}
        </div>
        
    </>

    )
}