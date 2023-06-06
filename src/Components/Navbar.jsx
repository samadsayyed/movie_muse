import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>
        MovieMuse
      </h1>
      <span>
        <Link to={'/'}>
          <a>
            Home
          </a>
        </Link>
        <Link to={'/about'}>
          <a>
            About
          </a>
        </Link>
        <Link to={'/contact'}>
          <a>
            Contact
          </a>
        </Link>
      </span>
    </nav>
  )
}

export default Navbar