import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fetch from './Fetch.jsx'
import RefCounter from './RefCounter.jsx'
import Password from './Password.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Password />
  </StrictMode>,
)
