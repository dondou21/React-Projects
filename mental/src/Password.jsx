import { useState, useRef } from "react";

export default function Password() {
    const [show, setShow] = useState(false)
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [submit, setSubmit] = useState(false)
    const inputRef = useRef(null)


    // 🐵🙈
    function handleSubmit(e) {
        e.preventDefault();
        setPass(inputRef.current.value)
        setSubmit(true)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                <input 
                    type="text"
                    placeholder="Username..."
                    ref={inputRef} 
                />
                <input 
                    type={ show ? "text" : "password"}
                    placeholder="New password"
                    ref={inputRef}
                />
                <button 
                    style={{ width: '25%' }}
                    onClick={() => setShow(prev => !prev)}

                 >
                    { !show ? "🐵" :"🙈"}
                </button>
                <input 
                    type={ show ? "text" : "password"}
                    placeholder="Confirm password"
                    ref={inputRef} 
                />
                <button type="submit" style={{ width: '50%', marginTop: '3rem' }}>
                    Sign Up
                </button>
            </form>
            <h1>{   submit && ( pass.length < 6 ? "Password must be most than 6 characters" : "Profile created successfully " )}</h1>
        </div>
    )
    
}