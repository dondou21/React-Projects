import { Link } from "react-router-dom"

export default function Header() {
    return (
              <nav>
                <Link className="site-logo" to="/">#VANLIFE</Link>
                <div className='link'>
                  <Link className='link-items' to="/about">About</Link>
                  <Link className='link-items' to="/van">Vans</Link>
                </div>
                
              </nav>
    )
}