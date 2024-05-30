import { Container, Row, Col, Image } from "react-bootstrap";
import doctor from "../../assets/doctoraboutus.jpeg";
import "./AboutUs.css";

export function AboutUs() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="about-us-text-col">
          <div className="about-us-text-container">
            <h2 className="about-us-header">O nas</h2>
            <p className="about-us-text">
              Nasza firma została założona z pasją do doskonałości. Od początku
              dążymy do zapewnienia najwyższej jakości usług, zawsze skupiając
              się na zadowoleniu klientów.
            </p>
            <h3 className="about-us-subheader">Nasz zespół</h3>
            <p className="about-us-text">
              Nasz zespół składa się z doświadczonych profesjonalistów, którzy
              są gotowi sprostać największym wyzwaniom i zapewnić naszym
              klientom najlepsze rozwiązania.
            </p>
            <h3 className="about-us-subheader">Nasza misja</h3>
            <p className="about-us-text">
              Naszą misją jest dostarczanie klientom wyjątkowych doświadczeń i
              rozwiązań, które przyczyniają się do ich sukcesu i zadowolenia.
            </p>
            <h3 className="about-us-subheader">Nasza wizja</h3>
            <p className="about-us-text">
              Chcemy być liderem w branży, wyznaczając nowe standardy jakości i
              innowacji, oraz rozwijać się wraz z naszymi klientami.
            </p>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <div className="image-container">
            <Image src={doctor} rounded fluid className="about-us-image" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
