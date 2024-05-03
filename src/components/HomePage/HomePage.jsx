import { Button, Row, Col, Card} from 'react-bootstrap';
import doctorhomepage2 from "../../assets/doctorhomepage2.jpg";
import { FaHeartbeat } from "react-icons/fa";
import { CiStethoscope } from "react-icons/ci";
import { FaBrain } from "react-icons/fa6";
import { LuBone } from "react-icons/lu";
import { FaDiagnoses } from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";
import trophy from "../../assets/trophy.jpeg";

import "./HomePage.css";

const MEDICAL_SERVICES = [
  { title: "Kardiolog", description: "Specjalizacja zajmująca się diagnozowaniem i leczeniem chorób serca i układu krążenia.  ", icon: <FaHeartbeat style={{ width: "20px", height: "20px"}} /> },
  { title: "Neurolog", description: "Zajmuje się diagnozowaniem i leczeniem chorób układu nerwowego, takich jak udary, padaczka, czy stwardnienie rozsiane.", icon: <FaBrain style={{ width: "20px", height: "20px" }} /> },
  { title: "Ortopeda", description: "Specjalizacja zajmująca się diagnozowaniem i leczeniem urazów, zaburzeń i chorób układu kostno-stawowego.", icon: <LuBone style={{ width: "20px", height: "20px"}} /> },
  { title: "Stomatolog", description: "Stomatologia to dziedzina medycyny zajmująca się zdrowiem jamy ustnej, zębów i przyzębia.", icon: <FaTooth style={{ width: "20px", height: "20px" }} /> },
  { title: "Diabetolog", description: "Specjalizacja zajmująca się leczeniem cukrzycy i jej powikłań.", icon: <FaDiagnoses style={{ width: "20px", height: "20px"}} /> },
  { title: "Pediatra", description: "Koncentruje się na zdrowiu i leczeniu dzieci, od noworodków po młodzież.", icon: <CiStethoscope style={{ width: "20px", height: "20px"}} /> },
];

export function HomePage() {
  return (
    <div>
      <Row className="no-gutters">
        <Col className="przychodnia-description">
          <h1 className="text-center">Przychodnia lekarska Świtałka</h1>
          <h4>Zadbaj o swoje zdrowie w naszej przychodni medycznej! </h4>
          <h4>Nasz doświadczony zespół lekarzy jest gotowy, by zadbać o Ciebie i Twoją rodzinę. Zapraszamy do skorzystania z naszych usług medycznych już dziś! </h4>
          <h4>Oferujemy kompleksową opiekę medyczną dla całej rodziny, w tym: </h4>
          <ul className="ps-3">
            <li><h4>Poradnictwo zdrowotne</h4></li>
            <li><h4>Badania profilaktyczne</h4></li>
            <li><h4>Konsultacje lekarskie</h4></li>
            <li><h4>Leczenie chorób przewlekłych</h4></li>
            <li><h4>Rehabilitację</h4></li>
          </ul>
          <Button variant="outline-light" href="/services">Więcej</Button>
        </Col>
        <Col>
        <div className="image-container">
          <img src={doctorhomepage2} alt="doctor with digitaizer" className="image" />
        </div>
        </Col>
      </Row>
      <div>
        <h3 className="text-center pt-4">Znajdziesz u nas specjalistów z różnych specjalizacji, takich jak:</h3>
        <Row className="d-flex justify-content-center">
          {MEDICAL_SERVICES.map((service) => (
            <Col key={service.title} xs={12} md={6} lg={4} className="d-flex align-items-center justify-content-center">
            <Card className="services-description">
            <Card.Body>
              <Card.Title>{service.title} {service.icon}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
            </Card.Body>
              </Card>
              </Col>
          ))}
          </Row>
      </div>
      <div>
        <Row className="trophy-description">
          <Col className="d-flex justify-content-center align-items-center">
            <div className="trophy-image-container">
              <img src={trophy} alt="our trophy image" className="trophy-image"/>
            </div>
          </Col>
          <Col className="trophy-win-description">
            <h3>Nasza przychodnia, Świtałka,  zdobyła główną nagrodę w konkursie "Zdrowie na Pierwszym Miejscu"!</h3>
            <h4>Ogłaszamy z dumą, że Nasza przychodnia medyczna została laureatem konkursu <bolder>"Zdrowie na Pierwszym Miejscu"</bolder>.<br /></h4>
            <h4>Dziękujemy niezawodnemu zespołowi i naszym pacjentom za zaufanie i wsparcie. <br /></h4>
            <h4>Nasza misja to dbanie o zdrowie społeczności poprzez innowacyjne podejście i wysoką jakość opieki. <br /></h4>
            <h4>Dołącz do nas i zaufaj profesjonalizmowi!</h4>
          </Col>
        </Row>
      </div>
    </div>
  )
}
