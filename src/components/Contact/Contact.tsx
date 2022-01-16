import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact(){

  return(
    <Container id="contacto">
      <header>
        <h2>¿Hablamos?</h2>
        <p>Puedes ponerte en contacto conmigo por estas vías</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:mail@cristinajovernavarro.com">mail@cristinajovernavarro.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Tel" />
          <a href="tel:+34679862811">+34 679 86 28 11</a>
        </div>  
      </div>
    </Container>
  )
}
