import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'

import Curriculo from '../../assets/Cristina-Jover-Navarro-Desarrolladora-Web-Frontend-1.pdf'
export function Header() {
  const [isactive, setActive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>C</span>
          <span>J</span>
		  <span>N</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isactive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#sobre" onClick={closeMenu}>
            Sobre mí
          </NavHashLink>
          <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
            Portfolio
          </NavHashLink>
          <NavHashLink smooth to="#contacto" onClick={closeMenu}>
            Contacto
          </NavHashLink>
          <a href={Curriculo} download className="button">
            Descargar CV
          </a>
        </nav>

        <div
          aria-expanded={isactive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isactive ? 'Fechar menu' : 'Abrir menu'}
          className={isactive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isactive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
