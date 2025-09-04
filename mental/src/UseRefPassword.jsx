import { useRef, useState } from 'react';

export default function RefPassword() {
    const inputRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault();
        //console.log(inputRef.current.value)
        const password = inputRef.current.value;
        console.log(password)
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Enter password'
                    ref={inputRef}
                />
            </form>
        </div>
    )
}