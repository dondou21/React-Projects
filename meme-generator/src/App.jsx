import { useState } from 'react'
import Meme from './Meme.jsx'
import './App.css'

function App() {
  const [firstText, setFirstText] = useState("")
  const [secondText, setSecondText] = useState("")

function handleSubmit(event) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const first = formData.get("firstText")
  const second = formData.get("secondText")
  setFirstText(prev => first)
  setSecondText(prev => second)
  event.target.reset()

}

  return (
    <>
      <div className="form-container" >
        <h1>Meme Generator</h1>
        <section>
          <form onSubmit={handleSubmit} className="inputArea" >
            <input type="text" placeholder="...First text" name="firstText"/>
          </form>
          <form onSubmit={handleSubmit} className="inputArea">
            <input type="text" placeholder="...Second text" name="secondText"/>
          </form>
          <button>Generate</button>
        </section>
        <h2>{firstText}</h2>
        <h2>{secondText}</h2>
      </div>

      <Meme text1={firstText} text2={secondText} />
    </>
  )
}

export default App
