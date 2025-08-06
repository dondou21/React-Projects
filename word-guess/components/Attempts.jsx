export default function Attempts() {

    const attempts = ['HTML', 'CSS', 'Javascript', 'React', 'Typscript', 'Node.js', 'Python', 'Ruby', 'Assembly']

    const displayAttemps = attempts.map((attempt) => (
            <button className="btn attempt-item" >{attempt}</button>
        )
    )

    return (
        <>
            <div className="attempt">
                {displayAttemps}
            </div>
        </>
        
    )
}