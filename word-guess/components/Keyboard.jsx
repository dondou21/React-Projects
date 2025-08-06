
function generateLetters() {

        const letters = []
        for(let i = 65; i<= 90; i++) {
            letters.push(String.fromCharCode(i))
        }
    return letters
}


export default function Keyboard() {
    const alphabet = generateLetters()

    const characters = alphabet.map((char) => (
        <button key={char} className="char">{char}</button>
    ))
   

    
    return (
        <div className="characters">
            {characters}
        </div>
    )
}