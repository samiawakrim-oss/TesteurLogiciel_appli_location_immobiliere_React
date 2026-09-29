import { NavLink } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <header className="header">

      <NavLink to="/" aria-label="Retour à l'accueil">
        <img
          className="logo"
          src="/logo-kasa.png"
          alt="Kasa"
        />
      </NavLink>

      <nav className="nav" aria-label="Navigation principale">

        <NavLink to="/">
          Accueil
        </NavLink>

        <NavLink to="/a-propos">
          À propos
        </NavLink>

      </nav>

    </header>
  )
}

export default Header