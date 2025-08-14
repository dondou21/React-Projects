import "../server.js"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Home.jsx'
import About from './About.jsx'
import Van from './Van.jsx'
import VanDetail from './VanDetail.jsx'
import Layout from './components/Layout.jsx'
import HostLayout from "./components/HostLayout.jsx"
import Dashboard from './host/Dashboard.jsx'
import Income from "./host/Income.jsx"
import Reviews from "./host/Reviews.jsx"

import './index.css'

function App() {
  return (
    <BrowserRouter>
    <div className='page-container'>
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/van' element={<Van />}/>
            <Route path='/van/:id' element={<VanDetail />}/>
          </Route>
          <Route path="/host" element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>

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
