import { useState, useEffect } from "react"
import Keyboard from "./Keyboard"
import Result from "./Result"

export default function Guess() {

    const words = ['HELLO', 'WORD', 'JAVASCRIPT', 'REACT', 'PROGRAMMING', 'COMPONENT']
    const word = words[Math.floor(Math.random() * words.length)]

    const [guessedLetters, setGuessedLetters] = useState([])
    const [challenge, setChanllenge] = useState(word)
    const [point, setPoint] = useState(0)
    const [isWon, setIsWon] = useState(0)


    // Setting new challenge

    if( point > 7 || isWon === challenge.split('').length ) {
        setChanllenge(prev => words[Math.floor(Math.random() * words.length)])
        setIsWon(prev => 0)
        setPoint(prev => 0)
        setGuessedLetters(prev => [])
    }

    const displayWord = challenge.split('').map((char, index) => (
        <button key={index} className="wordGuess">
            {guessedLetters.includes(char) ? char: "-"}
        </button>
    ))

    
    //Setting Points  and Characters
    const handleLetterClick = (char) => {
        setGuessedLetters(prev => [...prev, char])
        !challenge.split('').includes(char)? setPoint(prev => prev+1) : setIsWon(prev => prev+1)
    }


    return (
        <div className="guess">
            <Result value = {point} won = {isWon} wordLength = {challenge.split('').length}/>
            <div className="wordArea">{displayWord}</div>
            <Keyboard onLetterClick={handleLetterClick} />
        </div>
    )
}