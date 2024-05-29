import { Col, Card } from "react-bootstrap";
import { FaCalendarCheck, FaSearch } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import "./ClinicDescriptionCard.css";

const DOCTORS = [
  {
    title: "Znajdź specjalistę",
    text: "Wybierz spośród wielu dostępnych specjalistów i lekarzy. Przeglądaj opinie innych pacjentów i wybieraj!",
    icon: <FaSearch style={{ width: "20px", height: "20px" }} />,
  },
  {
    title: "Łatwo umów wizytę",
    text: "Wybierz odpowiadający Ci termin, podaj swoje dane i otrzymaj pełny dostęp do usług. Bardzo szybki i łatwy proces!",
    icon: <FaCalendarCheck style={{ width: "20px", height: "20px" }} />,
  },
  {
    title: "Przyjdź na wizytę",
    text: "O wybranym terminie przypominimy Ci automatycznie za pomocą wiadomości SMS i mailem.",
    icon: <IoTime style={{ width: "20px", height: "20px" }} />,
  },
];

export function ClinicDescriptionCard() {
  return (
    <div className="przychodnia-desc d-flex justify-content-evenly align-items-stretch flex-wrap">
      {DOCTORS.map((doctor) => (
        <Col
          key={doctor.title}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex align-items-stretch mb-3"
        >
          <Card className="w-100">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
                <div>
                  <Card.Title>
                    {doctor.icon} {doctor.title}
                  </Card.Title>
                  <Card.Text>{doctor.text}</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  );
}
