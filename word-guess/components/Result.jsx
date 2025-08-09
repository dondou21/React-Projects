export default function Result(props) {


    return (
        <div className="result">
            { props.value === 7 ? <h1> Game Over Try Again !!!</h1> : null}
            { props.won === (props.wordLength) ? <h1> Congratulations You Won !!!</h1> : null}
        </div>
    )
}