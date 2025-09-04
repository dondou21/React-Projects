import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  
  const [lengthCheck, setLengthCheck] = useState(false)
  const [uppercaseChecker, setUppercaseChecker] = useState(false)
  const [lowercaseChecker, setLowercaseChecker] = useState(false)
  const [digit, setDigit] = useState(false)
  const [special, setSpecial] = useState(false)

  // checking area

  // Lenght
  useEffect(() => {
    setLengthCheck(password.length >= 8)
  }, [password]);


  // Uppercase
  useEffect(() => {
    const upper = /[A-Z]/.test(password);
    setUppercaseChecker(upper)
  }, [password]);

  // Lowercase
  useEffect(() => {
    const lower = /[a-z]/.test(password);
    setLowercaseChecker(lower)
  }, [password]);


  // Digit
  useEffect(() => {
    const dig = /[0-9]/.test(password);
    setDigit(dig)
  }, [password]);

useEffect(() => {
  const spe = password.split('').map((char) => {
    if(!/[a-z]/.test(char) && !/[A-z]/.test(char) && !/[0-9]/.test(char) && char !==' ') {
      setSpecial(true)
    }
  }, [password])
})

console.log(special, uppercaseChecker, lowercaseChecker, digit, lengthCheck)
  return (
    <>
      <h1>Create Password</h1>
      <h3>Enter a secure password</h3>
      <form action="">
        <input  
                type="password" 
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
        /> <span className='hidden-icon' onClick={(e) => setShowPassword(prev => !prev) }> {showPassword ? "🙈" : "👁️"}</span>
      </form>
      <div className='checking-area'>
        <h3>Passwor Requirements</h3>
        <div>
           <input type="checkbox"  disabled checked={lengthCheck} />
           <span>     At leat 8 characters</span>
        </div>
        <div>
          <input type="checkbox"  disabled checked={uppercaseChecker} />
          <span>    Contains uppercase character</span>
        </div>
        <div>
          <input type="checkbox"  disabled checked={lowercaseChecker} />
          <span>     Contains lowercase character</span>
        </div>
        <div>
          <input type="checkbox"  disabled checked={digit} />
          <span>     Contains a digit</span>
        </div>
        <div>
          <input type="checkbox"  disabled checked={special} />
          <span>    Contains a special character</span>
        </div>
      </div>
    <button disabled={
      !special ||
      !uppercaseChecker ||
      !lowercaseChecker ||
      !digit ||
      !lengthCheck
    }
    >
      Sumbmit 
    </button>
  
    </>
  )
}

export default App
