import { Button, Form } from "react-bootstrap";
import "./AccountEdit.css";

export function AccountEdit() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-4">
      <h2>Zmień swoje dane</h2>
      <div className="w-50">
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Imię:</Form.Label>
            <Form.Control type="text" name="username" value="Janusz" required />
          </Form.Group>

          <Form.Group controlId="nazwisko">
            <Form.Label>Nazwisko</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value="Januszowski"
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value="janusz.januszowski@januszowo.pl"
              required
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Numer telefonu:</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value="512 121 122"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Addres zamieszkania:</Form.Label>
            <Form.Control
              as="textarea"
              name="address"
              rows={4}
              value="Zakopane, ul. Jana Pawła II, 22"
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="mt-2 mb-2">
            Zapisz
          </Button>
        </Form>
      </div>
    </div>
  );
}
