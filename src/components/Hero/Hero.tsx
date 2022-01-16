import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import Curriculo from '../../assets/Cristina-Jover-Navarro-Desarrolladora-Web-Frontend-1.pdf'

export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Cristina Jover Navarro</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Desarrolladora Front-End</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">¡Hola! Si has llegado aquí buscando un desarrollador web mayoritariamente <abbr title="La parte visual y de interacción con el usuario">Front-end</abbr>, con conocimientos de <abbr title="La lógica que tienen detrás las páginas web">Back-end</abbr> y con un background relacionado con la comunicación y el diseño, has llegado al lugar adecuado. Tengo experiencia de trabajo en el sector educativo, en agencia de marketing y en una start-up tecnológica. Si quieres conocer mi trayectoria con más detalle echa un vistazo a mi CV.</p>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.8*1000}>
            <BrowserRouter>
              <a href={Curriculo} className="button" target="_blank">VER CV COMPLETO</a>
            </BrowserRouter>
          </ScrollAnimation>

      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
          <img src={Illustration} alt="Imagen vectorial"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
