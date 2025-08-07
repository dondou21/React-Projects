import { useState } from "react"

function generateLetters() {

        const letters = []
        for(let i = 65; i<= 90; i++) {
            letters.push(String.fromCharCode(i))
        }
    return letters
}


export default function Keyboard({ onLetterClick }) {
    const [letter, setLetter] = useState([])
    const alphabet = generateLetters()

    const handleClick = (char) => {
        onLetterClick(char)
    }

    const characters = alphabet.map((char, index) => (
        <button key={index} className="char" onClick={() => handleClick(char)}>
            {char}
        </button>
    ))
   

    
    return (
        <>
            <div className="characters">
                {characters}
            </div>
        </>
        
    )
}