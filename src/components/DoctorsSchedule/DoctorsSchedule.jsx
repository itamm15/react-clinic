import { Row, Col, Card } from 'react-bootstrap';
import { FaHeartbeat } from "react-icons/fa";
import { CiStethoscope } from "react-icons/ci";
import { FaBrain } from "react-icons/fa6";
import { LuBone } from "react-icons/lu";
import { FaDiagnoses } from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";

const DOCTORS = [
  { person: "Dr. Krzysztof Zjadek", title: "Kardiolog", days: "Poniedziałek - Piątek", time: "8:00 - 16:00", icon: <FaHeartbeat style={{ width: "70px", height: "70px"}} /> },
  { person: "Dr. Karina Wojska", title: "Neurolog", days: "Poniedziałek - Czwartek", time: "8:00 - 12:00", icon: <FaBrain style={{ width: "70px", height: "70px" }} /> },
  { person: "Dr. Karol Poss", title: "Ortopeda", days: "Wtorek - Piątek", time: "12:00 - 19:00", icon: <LuBone style={{ width: "70px", height: "70px"}} /> },
  { person: "Dr. Karol Wojteka", title: "Stomatolog", days: "Poniedziałek - Piątek", time: "9:30 - 15:00", icon: <FaTooth style={{ width: "70px", height: "70px" }} /> },
  { person: "Dr. Magdalena Kowalska", title: "Diabetolog", days: "Środa - Piątek", time: "8:30 - 19:00", icon: <FaDiagnoses style={{ width: "70px", height: "70px"}} /> },
  { person: "Dr. Szymon Szczepała", title: "Pediatra", days: "Czwartek - Piątek", time: "8:00-19:00", icon: <CiStethoscope style={{ width: "70px", height: "70px"}} /> },
]

export function DoctorsSchedule() {
  return (
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
  )
}
