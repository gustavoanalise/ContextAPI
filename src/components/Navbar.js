import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
          <nav>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/contact'>Contato</NavLink>
          </nav>

    </div>
  )
}

export default Navbar