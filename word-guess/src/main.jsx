import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from '../components/Header'
import Result from '../components/Result.jsx'
import Attempts from '../components/Attempts.jsx'
import Keyboard from '../components/Keyboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Result />
    <Attempts />
    <Keyboard />
  </StrictMode>,
)
