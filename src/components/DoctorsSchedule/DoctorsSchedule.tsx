import { Row, Col, Card, Form } from "react-bootstrap";
import "./DoctorsSchedule.css";
import { DOCTORS, Doctor } from "../SpecialistsPage/specialistspage.const";

type DoctorsScheduleProps = {
  classname?: string;
  shouldShowInput?: boolean;
  searchTerm?: string;
  filteredDoctors?: Doctor[];
  handleSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPickDoctor?: (event: React.MouseEvent<HTMLElement>, doctor: Doctor) => void;
};

export function DoctorsSchedule({
  classname = "bg-body-tertiary",
  shouldShowInput = false,
  searchTerm,
  filteredDoctors,
  handleSearchChange,
  onPickDoctor,
}: DoctorsScheduleProps) {
  const doctors = filteredDoctors ? filteredDoctors : DOCTORS;

  return (
    <div className={classname}>
      <h3 className="text-center pt-4">Specjaliści w przychodni Świtałka</h3>
      <Row className="d-flex justify-content-center">
        {shouldShowInput && (
          <Col xs={12} className="d-flex justify-content-center mb-3">
            <Form.Control
              type="text"
              placeholder="Wyszukaj lekarza..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="input-field"
            />
          </Col>
        )}
        {doctors.map((doctor) => (
          <Col
            key={doctor.person}
            xs={12}
            md={6}
            lg={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Card
              className="doctors-description"
              {...(onPickDoctor && {
                onClick: (event) => onPickDoctor(event, doctor),
              })}
            >
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="me-3">{doctor.icon}</div>
                  <div>
                    <Card.Title>{doctor.person}</Card.Title>
                    <Card.Text>
                      {doctor.title} <br />
                      Dzień: {doctor.days} <br /> Godzina: {doctor.time}
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
