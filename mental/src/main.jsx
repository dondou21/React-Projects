import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fetch from './Fetch.jsx'
import RefCounter from './RefCounter.jsx'
import Password from './Password.jsx'
import ThemeProvider from './Constext.jsx'
import Reducer from './Reducer.jsx'
import Counter from './Counter.jsx'
import Filtering from './Filtering.jsx'
import Users from './Users.jsx'
import RefPassword from './UseRefPassword.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider>
      <Password />
      <Reducer />
      <Counter />
    </ThemeProvider> 
    
    <Filtering />

      <Users />*/}
      <RefPassword />
  </StrictMode>,
)
