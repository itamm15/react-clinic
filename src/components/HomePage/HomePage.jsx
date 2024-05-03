import { Button, Row, Col } from 'react-bootstrap';
import doctorhomepage2 from "../../assets/doctorhomepage2.jpg";
import "./HomePage.css";

export function HomePage() {
  return (
    <div>
      <Row className="no-gutters">
        <Col className="przychodnia-description">
          <h1 className="text-center">Przychodnia lekarska</h1>
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
    </div>
  )
}
