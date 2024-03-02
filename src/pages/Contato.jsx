import React from 'react'
import { Link } from 'react-router-dom'

const Contato = () => {
  return (
    <>
        <h4>Contato</h4>
        <ul>
            <li>
                <Link to='/contato/1'>Exibir Contato do Criador 1</Link>
            </li>
            <li>
            <Link to='/contato/2'>Exibir Contato do Criador 2</Link>
            </li>
        </ul>
    </>
  )
}

export default Contato