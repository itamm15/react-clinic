import { Row, Col } from 'react-bootstrap';
import trophy from "../../assets/trophy.jpeg";

export function Trophy() {
  return (
    <div>
    <Row className="trophy-description">
      <Col className="d-flex justify-content-center align-items-center">
        <div className="trophy-image-container">
          <img src={trophy} alt="nasze trofeum" className="trophy-image"/>
        </div>
      </Col>
      <Col className="trophy-win-description">
        <h3>Nasza przychodnia zdobyła główną nagrodę w konkursie "Zdrowie na Pierwszym Miejscu"!</h3>
        <h4>Ogłaszamy z dumą, że Nasza przychodnia medyczna została laureatem konkursu <bolder>"Zdrowie na Pierwszym Miejscu"</bolder>.<br /></h4>
        <h4>Dziękujemy niezawodnemu zespołowi i naszym pacjentom za zaufanie i wsparcie. <br /></h4>
        <h4>Nasza misja to dbanie o zdrowie społeczności poprzez innowacyjne podejście i wysoką jakość opieki. <br /></h4>
        <h4>Dołącz do nas i zaufaj profesjonalizmowi!</h4>
      </Col>
    </Row>
  </div>
  )
}
