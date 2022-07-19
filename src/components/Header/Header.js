import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../../images/back-button.svg'
import { FiMenu } from 'react-icons/fi';
import "./header.css"

function Header() {
  return (
    <header>
      <div className="container">
          <Link to="/" onClick={() => {window.location.href="/"}}>
              <FiMenu/>
          </Link>
        <h2>CADASTRO DA LOJA</h2>

      </div>
    </header>
  )

}

export default Header