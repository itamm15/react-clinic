import { Container, Row, Col, Card } from "react-bootstrap";
import "./ServicePage.css";

export const ServicePage = () => {
  return (
    <div className="service-page p-4">
      <Row>
        <Col md={12}>
          <h1 className="text-center mb-5">Nasze usługi</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <Card className="p-4 mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Badania diagnostyczne</Card.Title>
              <Card.Text>
                Oferujemy szeroki zakres badań diagnostycznych, w tym badania
                krwi, USG, EKG i wiele innych. Nasze nowoczesne wyposażenie oraz
                doświadczony personel zapewniają dokładność i szybkość wyników,
                pomagając w postawieniu trafnej diagnozy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4 mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Konsultacje lekarskie</Card.Title>
              <Card.Text>
                Nasz zespół lekarzy specjalistów oferuje profesjonalne
                konsultacje w różnych dziedzinach medycyny. Zadbamy o Twoje
                zdrowie, oferując indywidualne podejście oraz dokładną ocenę
                stanu zdrowia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <Card className="p-4 mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Rehabilitacja</Card.Title>
              <Card.Text>
                Zapewniamy kompleksową rehabilitację dla pacjentów po urazach,
                operacjach oraz z przewlekłymi schorzeniami. Nasz zespół
                fizjoterapeutów dostosowuje programy rehabilitacyjne do
                indywidualnych potrzeb każdego pacjenta.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4 mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Porady dietetyczne</Card.Title>
              <Card.Text>
                Oferujemy profesjonalne porady dietetyczne, które pomogą Ci
                osiągnąć i utrzymać zdrową wagę oraz poprawić ogólne
                samopoczucie. Nasz dietetyk przygotuje dla Ciebie
                spersonalizowany plan żywieniowy, uwzględniając Twoje potrzeby i
                cele zdrowotne.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
