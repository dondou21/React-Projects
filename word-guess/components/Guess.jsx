export default function Guess() {
    const words = ['HELLO', 'WORD', 'JAVASCRIPT', 'REACT', 'PROGRAMMING', 'COMPONENT']
    const word = words[Math.floor(Math.random() * words.length)]

    const displayWord = word.split('')
    const area = displayWord.map((i, index) => (
        <button key={index} className="wordGuess"></button>
    ))
    return (
        <div className="guess">
            {area}
        </div>
    )
}