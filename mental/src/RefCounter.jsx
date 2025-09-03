import { useRef, useState } from 'react';

export default function RefCounter() {
    let ref = useRef(0)
    const [, forceRender] = useState({})

    function handleClick () {
        ref.current = ref.current + 1
        forceRender({})
        console.log('clicked')
        console.log(ref.current)
    }

    return (
        <div>
            <h1>{ref.current}</h1>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    )
}