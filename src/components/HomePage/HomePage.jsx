import { Container, Button, Row, Col, Card} from 'react-bootstrap';
import doctorhomepage2 from "../../assets/doctorhomepage2.jpg";
import { FaHeartbeat } from "react-icons/fa";
import { CiStethoscope } from "react-icons/ci";
import { FaBrain } from "react-icons/fa6";
import { LuBone } from "react-icons/lu";
import { FaDiagnoses } from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";
import trophy from "../../assets/trophy.jpeg";
import doctorhomepage from "../../assets/doctorhomepage.jpg";

import "./HomePage.css";

const MEDICAL_SERVICES = [
  { title: "Kardiolog", description: "Specjalizacja zajmująca się diagnozowaniem i leczeniem chorób serca i układu krążenia.  ", icon: <FaHeartbeat style={{ width: "20px", height: "20px"}} /> },
  { title: "Neurolog", description: "Zajmuje się diagnozowaniem i leczeniem chorób układu nerwowego, takich jak udary, padaczka, czy stwardnienie rozsiane.", icon: <FaBrain style={{ width: "20px", height: "20px" }} /> },
  { title: "Ortopeda", description: "Specjalizacja zajmująca się diagnozowaniem i leczeniem urazów, zaburzeń i chorób układu kostno-stawowego.", icon: <LuBone style={{ width: "20px", height: "20px"}} /> },
  { title: "Stomatolog", description: "Stomatologia to dziedzina medycyny zajmująca się zdrowiem jamy ustnej, zębów i przyzębia.", icon: <FaTooth style={{ width: "20px", height: "20px" }} /> },
  { title: "Diabetolog", description: "Specjalizacja zajmująca się leczeniem cukrzycy i jej powikłań.", icon: <FaDiagnoses style={{ width: "20px", height: "20px"}} /> },
  { title: "Pediatra", description: "Koncentruje się na zdrowiu i leczeniu dzieci, od noworodków po młodzież.", icon: <CiStethoscope style={{ width: "20px", height: "20px"}} /> },
];

const DOCTORS = [
  { person: "Dr. Krzysztof Zjadek", title: "Kardiolog", days: "Poniedziałek - Piątek", time: "8:00 - 16:00", icon: <FaHeartbeat style={{ width: "70px", height: "70px"}} /> },
  { person: "Dr. Karina Wojska", title: "Neurolog", days: "Poniedziałek - Czwartek", time: "8:00 - 12:00", icon: <FaBrain style={{ width: "70px", height: "70px" }} /> },
  { person: "Dr. Karol Poss", title: "Ortopeda", days: "Wtorek - Piątek", time: "12:00 - 19:00", icon: <LuBone style={{ width: "70px", height: "70px"}} /> },
  { person: "Dr. Karol Wojteka", title: "Stomatolog", days: "Poniedziałek - Piątek", time: "9:30 - 15:00", icon: <FaTooth style={{ width: "70px", height: "70px" }} /> },
  { person: "Dr. Magdalena Kowalska", title: "Diabetolog", days: "Środa - Piątek", time: "8:30 - 19:00", icon: <FaDiagnoses style={{ width: "70px", height: "70px"}} /> },
  { person: "Dr. Szymon Szczepała", title: "Pediatra", days: "Czwartek - Piątek", time: "8:00-19:00", icon: <CiStethoscope style={{ width: "70px", height: "70px"}} /> },
]

export function HomePage() {
  return (
    <div>
      <div className="doctor-image-container">
      <div className="image-overlay" />
        <img className="doctor-image" src={doctorhomepage} alt="doctor with digitalizer" />
        <div className="text-overlay overlay-description">
          <h1 className="overlay-text">Konsultacje <br />Lekarzy<br /> Specjalistów</h1>
        </div>
      </div>
      <Row className="przychodnia-desc">
        <Col className="przychodnia-description ms-5">
          <h2 className="text-center">Przychodnia lekarska Świtałka</h2>
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
          <Button variant="light" href="/services">Więcej</Button>
        </Col>
        <Col>
        <div className="image-container">
          <img src={doctorhomepage2} alt="doctor with digitaizer" className="image" />
        </div>
        </Col>
      </Row>
      <div className='bg-body-tertiary'>
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
            <h3>Nasza przychodnia zdobyła główną nagrodę w konkursie "Zdrowie na Pierwszym Miejscu"!</h3>
            <h4>Ogłaszamy z dumą, że Nasza przychodnia medyczna została laureatem konkursu <bolder>"Zdrowie na Pierwszym Miejscu"</bolder>.<br /></h4>
            <h4>Dziękujemy niezawodnemu zespołowi i naszym pacjentom za zaufanie i wsparcie. <br /></h4>
            <h4>Nasza misja to dbanie o zdrowie społeczności poprzez innowacyjne podejście i wysoką jakość opieki. <br /></h4>
            <h4>Dołącz do nas i zaufaj profesjonalizmowi!</h4>
          </Col>
        </Row>
      </div>
      <div className="bg-body-tertiary">
        <h3 className="text-center pt-4">Harmonogram spotkań w naszej przychodni</h3>
        <Row className="d-flex justify-content-center">
          {DOCTORS.map((doctor) => (
            <Col key={doctor.person} xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
              <Card className="doctors-description">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div className="me-3">{doctor.icon}</div>
                    <div>
                      <Card.Title>{doctor.person}</Card.Title>
                      <Card.Text>{doctor.title} <br />Dzień: {doctor.days} <br /> Godzina: {doctor.time}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col className="text-center">
            &copy; 2024 Przychodnia Lekarska Świtałka
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}
