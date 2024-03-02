import React from 'react'
import { Link } from 'react-router-dom'

const myStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    justifyContent: 'center'
}

const NavBar = () => {
  return (
    <nav>
        <ul style={myStyle}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/contato'>Contato</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar