import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ContactPageConfirmationModal } from "./ContactPageConfirmationModal";
import { useUser } from "../../contexts/UserContext";

type FormData = {
  email: string;
  content: string;
};

const schema = yup.object({
  email: yup.string().email("Podaj prawidłowy adres email").required("Email jest wymagany"),
  content: yup.string().min(30, "Treść wiadomości musi mieć co najmniej 30 znaków").required("Treść wiadomości jest wymagana"),
}).required();

export function ContactPage() {
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
  const { user } = useUser();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: user?.email || "",
      content: "",
    }
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    setShowConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <div
            className="d-flex justify-content-evenly align-items-center mb-4"
            style={{ fontSize: "1.0rem" }}
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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Twój adres email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Twój adres email"
                  {...register("email")}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formContent">
                <Form.Label>Treść wiadomości:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Treść wiadomości"
                  {...register("content")}
                />
                {errors.content && <p style={{ color: 'red' }}>{errors.content.message}</p>}
              </Form.Group>

              <Button variant="success" type="submit">
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

      <ContactPageConfirmationModal showConfirmationModal={showConfirmationModal} handleCloseConfirmationModal={handleCloseConfirmationModal} />
    </Container>
  );
}

export default ContactPage;
