import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";
import webtfg from "../../assets/portfolio/logo-2.png";
import webpaleta from "../../assets/portfolio/paleta.png";
import webempresarial from "../../assets/portfolio/responsive2.png";
import webjj from "../../assets/portfolio/LogoJJ-1.png";
import webform from "../../assets/portfolio/landing3.png";
import imggit from "../../assets/portfolio/git.png";


export function Portfolio(){
  return(
    <Container id="portfolio">
	<div className="git">
	<ScrollAnimation></ScrollAnimation>
	<ScrollAnimation animateIn="flipInX">
        <div className="project">
			<a href="https://github.com/cjover-n" target="_blank">
          <header>
          <img className="img-portfolio" src={imggit}/>
          <div className="project-links">
          </div>
          </header>
          <div className="body">
            <p>Mi repositorio con proyectos de 42 Madrid y algún ejercicio de Java.
            </p>
          </div>
		  </a>
        </div>
      </ScrollAnimation>
	  <ScrollAnimation></ScrollAnimation>
	  </div>


      <h2>Portfolio de trabajos Web</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
			<a href="https://artecontemporaneocuenca.es/" target="_blank">
          <header>
          <img className="img-portfolio" src={webtfg}/>
          <div className="project-links">
          </div>
          </header>
          <div className="body">
            <h3>Arte Contemporáneo en Cuenca</h3>
            <p>Proyecto web para el Trabajo de Fin de Grado. Realización íntegra propia. Documentación, redacción, entrevistas, diseño, programación, fotografía, grabación y montaje de vídeo.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>WordPress</li>
			  <li>Fotografía</li>
			  <li>Montaje de vídeo</li>
			  <li>Redacción</li>
            </ul>
          </footer>
		  </a>
        </div>
      </ScrollAnimation>

	  <ScrollAnimation animateIn="flipInX">
        <div className="project">
			<a href="https://cristinajovernavarro.com/lapaletadepapel/" target="_blank">
          <header>
          <img className="img-portfolio" src={webpaleta}/>
          <div className="project-links">
          </div>
          </header>
          <div className="body">
            <h3>La Paleta de Papel</h3>
            <p>Blog sobre música, arte y periodismo elaborado durante mi época de estudiante. Programado en una estructura de WordPress multisitio utilizando el tema Hemingway personalizado.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>WordPress</li>
			  <li>Redacción</li>
            </ul>
          </footer>
		  </a>
        </div>
      </ScrollAnimation>

	  <ScrollAnimation animateIn="flipInX">
        <div className="project">
			<a href="https://responsiveblog.cristinajovernavarro.com/" target="_blank">
          <header>
          <img className="img-portfolio" src={webempresarial}/>
          <div className="project-links">
          </div>
          </header>
          <div className="body">
            <h3>Ejemplo de blog empresarial responsive</h3>
            <p>Muestra de una página empresarial completamente responsive con HTML y CSS, desde cero.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>HTML</li>
			  <li>CSS</li>
            </ul>
          </footer>
		  </a>
        </div>
      </ScrollAnimation>

	  <ScrollAnimation animateIn="flipInX">
        <div className="project">
			<a href="https://www.jjover.es/" target="_blank">
          <header>
          <img className="img-portfolio" src={webjj}/>
          <div className="project-links">
          </div>
          </header>
          <div className="body">
            <h3>Clínica Dental J.Jover</h3>
            <p>Trabajo web realizado para negocio de clínica dental, utilizando y modificando el tema Nirvana de WordPress.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Wordpress</li>
			  <li>Redacción</li>
            </ul>
          </footer>
		  </a>
        </div>
      </ScrollAnimation>

	  <ScrollAnimation animateIn="flipInX">
        <div className="project">
			<a href="https://landing.cristinajovernavarro.com/" target="_blank">
          <header>
          <img className="img-portfolio" src={webform}/>
          <div className="project-links">
          </div>
          </header>
          <div className="body">
            <h3>Modelo de Landing Page</h3>
            <p>Landing page empresarial enfocada a la captación de usuarios. Formulario doblemente validado con PHP y JavaScript.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>HTML</li>
			  <li>CSS</li>
			  <li>PHP</li>
			  <li>JavaScript</li>
            </ul>
          </footer>
		  </a>
        </div>
      </ScrollAnimation>



      </div>
    </Container>
  );
}
