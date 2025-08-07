import { useState } from "react"
import Keyboard from "./Keyboard"

export default function Guess() {
    const [guessedLetters, setGuessedLetters] = useState([])

    const words = ['HELLO', 'WORD', 'JAVASCRIPT', 'REACT', 'PROGRAMMING', 'COMPONENT']
    const word = words[Math.floor(Math.random() * words.length)]

    const displayWord = word.split('').map((char, index) => (
        <button key={index} className="wordGuess">
            {guessedLetters.includes(char) ? char: "-"}
        </button>
    ))

    const handleLetterClick = (char) => {
        setGuessedLetters(prev => [...prev, char])
    }
    return (
        <div className="guess">
            <div className="wordArea">{displayWord}</div>
            <Keyboard onLetterClick={handleLetterClick} />
        </div>
    )
}