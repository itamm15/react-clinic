import { Row, Col, Card } from "react-bootstrap";
import { FaHeartbeat } from "react-icons/fa";
import { CiStethoscope } from "react-icons/ci";
import { FaBrain } from "react-icons/fa6";
import { LuBone } from "react-icons/lu";
import { FaDiagnoses } from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";
import { IconBaseProps } from "react-icons";
import { ReactElement } from "react";

type MedicalService = {
  title: string;
  description: string;
  icon: ReactElement<IconBaseProps>;
};

const MEDICAL_SERVICES: MedicalService[] = [
  {
    title: "Kardiologia",
    description:
      "Specjalizacja zajmująca się diagnozowaniem i leczeniem chorób serca i układu krążenia.  ",
    icon: <FaHeartbeat style={{ width: "20px", height: "20px" }} />,
  },
  {
    title: "Neurologia",
    description:
      "Zajmuje się diagnozowaniem i leczeniem chorób układu nerwowego, takich jak udary, padaczka, czy stwardnienie rozsiane.",
    icon: <FaBrain style={{ width: "20px", height: "20px" }} />,
  },
  {
    title: "Ortopedia",
    description:
      "Specjalizacja zajmująca się diagnozowaniem i leczeniem urazów, zaburzeń i chorób układu kostno-stawowego.",
    icon: <LuBone style={{ width: "20px", height: "20px" }} />,
  },
  {
    title: "Stomatologia",
    description:
      "Stomatologia to dziedzina medycyny zajmująca się zdrowiem jamy ustnej, zębów i przyzębia.",
    icon: <FaTooth style={{ width: "20px", height: "20px" }} />,
  },
  {
    title: "Diabetologia",
    description:
      "Specjalizacja zajmująca się leczeniem cukrzycy i jej powikłań.",
    icon: <FaDiagnoses style={{ width: "20px", height: "20px" }} />,
  },
  {
    title: "Pediatria",
    description:
      "Koncentruje się na zdrowiu i leczeniu dzieci, od noworodków po młodzież.",
    icon: <CiStethoscope style={{ width: "20px", height: "20px" }} />,
  },
];

export function Specialists() {
  return (
    <div className="bg-body-tertiary">
      <h3 className="text-center pt-4">
        Znajdziesz u nas specjalistów z różnych specjalizacji, takich jak:
      </h3>
      <Row className="d-flex justify-content-center">
        {MEDICAL_SERVICES.map((service) => (
          <Col
            key={service.title}
            xs={12}
            md={6}
            lg={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Card className="services-description">
              <Card.Body>
                <Card.Title>
                  {service.title} {service.icon}
                </Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
