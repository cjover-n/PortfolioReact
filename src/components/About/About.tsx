import { Container } from "./styles";

import profileImage from "../../assets/_MG_6733.png"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About(){
  return(
    <Container id="sobre">
		<div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="Imagen de perfil" />
        </ScrollAnimation>
      </div>
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Sobre mí</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Me llamo Cris, tengo 28 años y soy una conquense afincada en Madrid.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Apasionada por la tecnología, los puzzles y por verle las «tripas» a las herramientas que usamos día a día, la vida me llevó tras graduarme en Periodismo a estudiar programación.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>Con buena parte de formación externa, pero también mucho de autodidacta, voy día a día aprendiendo sobre programación y sobre nuevas tecnologías en general, enfocándome especialmente en diseñar y crear páginas web.</p>
        </ScrollAnimation>
		<ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Tengo una curiosidad innata que me lleva a investigar en todas las áreas posibles, como en el diseño gráfico, la escritura creativa, el arte abstracto o la inteligencia artificial.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>

          <h3>Estas son algunas de mis <i>skills</i>:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <img src={vueIcon} alt="Vue" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={htmlIcon} alt="Html" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={cssIcon} alt="Css" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={nodeIcon} alt="Node" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={typescriptIcon} alt="Typescript" />
          </ScrollAnimation>
          </div>


        </div>
      </div>
      
    </Container>
  )
}
