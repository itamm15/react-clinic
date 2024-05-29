import { Button, Card, Form } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

export function UserAccountCard() {
  return (
    <Card>
    <Card.Body>
      <div className="d-flex justify-content-center align-items-center">
        <FaUser style={{ width: "200", height: "200" }} />
      </div>
      <Card.Title>
        <h3>Twoje dane</h3>
      </Card.Title>
      <Card.Text>
        <Form>
          <Form.Group controlId="userName">
            <Form.Label>Imie</Form.Label>
            <Form.Control type="text" value="Janusz" disabled></Form.Control>
          </Form.Group>

          <Form.Group controlId="userSuname">
            <Form.Label>Nazwisko</Form.Label>
            <Form.Control type="text" value="Januszowski" disabled></Form.Control>
          </Form.Group>

          <Form.Group controlId="userBirtdate">
            <Form.Label>Imie</Form.Label>
            <Form.Control type="date" value="2000-01-01" disabled></Form.Control>
          </Form.Group>
        </Form>
        <Button
          className="d-flex float-start mt-3"
          variant="success"
          href="/accountEdit"
        >
          Edytuj profil
        </Button>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}
