import { ChangeEvent, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MdMail, MdPlace } from "react-icons/md";
import { IoMdClock } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export function ContactPage() {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    setEmail("");
    setContent("");
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h5 className="text-center">Lokalizacja:</h5>
          <div
            className="d-flex justify-content-center align-items-center mb-4"
            style={{ fontSize: "1.2rem" }}
          >
            <MdPlace size={30} />
            <p className="ms-2 mb-0">Nad Reglami 23, 34-520 Zakopane</p>
          </div>
          <h5 className="text-center">Godziny otwarcia:</h5>
          <div
            className="d-flex justify-content-center align-items-center mb-4"
            style={{ fontSize: "1.2rem" }}
          >
            <IoMdClock size={30} />
            <p className="ms-2 mb-0">Poniedziałek - Piątek: 8:00 - 19:00</p>
          </div>
          <div
            className="d-flex justify-content-evenly align-items-center mb-4"
            style={{ fontSize: "1.2rem" }}
          >
            <div>
              <h5 className="text-center">Adres email:</h5>
              <p className="ms-2 mb-0">
                <MdMail size={28} />
                <a className="p-2" href="mailto:switalka@przychodnia.com">
                  switalka@przychodnia.com
                </a>
              </p>
            </div>
            <div>
              <h5 className="text-center">Numer kontaktowy:</h5>
              <p className="ms-2 mb-0">
                <FaPhoneAlt size={22} />{" "}
                <a className="p-2" href="tel:+48 123 456 789">
                  +48 123 456 789
                </a>
              </p>
            </div>
          </div>
          <div>
            <h5 className="text-center">Wyślij wiadomość:</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Twój adres email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Twój adres email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formContent">
                <Form.Label>Treść wiadomości:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Treść wiadomości"
                  value={content}
                  onChange={handleContentChange}
                />
              </Form.Group>

              <Button variant="success" onClick={handleSubmit}>
                Wyślij
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.0742630280155!2d19.942551616056325!3d49.29224867933107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f1e73d48b487%3A0x38b0e1b0b24f61c7!2sNad%20Reglami%2023%2C%2034-500%20Zakopane%2C%20Poland!5e0!3m2!1sen!2sus!4v1627916584155!5m2!1sen!2sus"
            width="100%"
            height="433"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
