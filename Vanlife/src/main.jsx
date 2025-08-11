import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Home.jsx'
import About from './About.jsx'
import './index.css'

function App() {
  return (
    <BrowserRouter>
    <div className='page-container'>
      <nav>
        <h1>#VANLIFE</h1>
        <div className='link'>
          <Link className='link-items' to="/about">About</Link>
          <Link className='link-items' to="/van">Vans</Link>
        </div>
        
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </main>
      
      <footer>
        <h2>© 2022 #VANLIFE</h2>
      </footer>
    </div>
      
    </BrowserRouter>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
