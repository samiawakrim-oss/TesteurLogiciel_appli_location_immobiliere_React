import './Footer.css'
import logoWhite from '../../assets/logo-kasa-white.svg'

function Footer() {
  return (
    <footer className="footer">
      {/* Logo blanc de Kasa */}
      <img
        className="footer-logo"
        src={logoWhite}
        alt="Kasa"
      />

      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer