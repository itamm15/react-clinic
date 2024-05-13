import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col className="text-center">
            &copy; 2024 Przychodnia Lekarska Świtałka
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
