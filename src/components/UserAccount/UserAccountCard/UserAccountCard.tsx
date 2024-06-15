import { Button, Card, Form } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { useUser } from "../../../contexts/UserContext";

export function UserAccountCard() {
  const { user } = useUser();

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
              <Form.Control type="text" value={user?.name} disabled></Form.Control>
            </Form.Group>

            <Form.Group controlId="userSuname">
              <Form.Label>Nazwisko</Form.Label>
              <Form.Control
                type="text"
                value={user?.surname}
                disabled
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="userEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={user?.email}
                disabled
              ></Form.Control>
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
  );
}
