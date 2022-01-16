import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
	  <span>C</span>
          <span>J</span>
		  <span>N</span>
      </a>
      <div>
        <p>
          Hecho con React <img src={reactIcon} alt="React" />
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/cristinajovernavarro/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/cjover-n"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

      </div>
    </Container>
  )
}
