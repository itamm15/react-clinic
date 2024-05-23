import { Col } from "react-bootstrap";
import trophy from "../../assets/trophy.jpeg";

export function Trophy() {
  return (
    <div className="trophy-description d-flex">
      <Col className="d-flex justify-content-center align-items-center">
        <div className="trophy-image-container">
          <img src={trophy} alt="nasze trofeum" className="trophy-image" />
        </div>
      </Col>
      <Col className="trophy-win-description">
        <h3>
          <strong>
            Nasza przychodnia zdobyła główną nagrodę w konkursie "Zdrowie na
            Pierwszym Miejscu"!
          </strong>
        </h3>
        <br />
        <h4>
          Ogłaszamy z dumą, że Nasza przychodnia medyczna została laureatem
          konkursu <strong>"Zdrowie na Pierwszym Miejscu"</strong>.<br />
        </h4>
        <h4>
          Dziękujemy niezawodnemu zespołowi i naszym pacjentom za zaufanie i
          wsparcie. <br />
        </h4>
        <h4>
          Nasza misja to dbanie o zdrowie społeczności poprzez innowacyjne
          podejście i wysoką jakość opieki. <br />
        </h4>
        <h4>Dołącz do nas i zaufaj profesjonalizmowi!</h4>
      </Col>
    </div>
  );
}
