import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dispatch, ReactElement } from "react";
import { EventClickArg } from "@fullcalendar/core";
import { User } from "../../../contexts/UserContext";
import { Button, Form, Modal } from "react-bootstrap";

type AppointmentModalProps = {
  showModal: boolean;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
  selectedEvent: EventClickArg | null;
  user: User | null;
  onConfirm: () => void;
};

type FormData = {
  phoneNumber: string;
  email: string;
};

const schema = yup
  .object({
    phoneNumber: yup
      .string()
      .matches(
        /^[0-9]{9}$/,
        "Podaj prawidłowy numer telefonu składający się z 9 cyfr",
      )
      .required("Numer telefonu jest wymagany"),
    email: yup
      .string()
      .email("Podaj prawidłowy adres email")
      .required("Email jest wymagany"),
  })
  .required();

export function AppointmentModal({
  showModal,
  setShowModal,
  selectedEvent,
  user,
  onConfirm,
}: AppointmentModalProps): ReactElement {
  const title: string = selectedEvent?.event.title ?? "";
  const date: Date | string = selectedEvent?.event.start ?? "";
  const formattedDate: string = new Date(date).toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      phoneNumber: user?.phone || "",
      email: user?.email || "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    onConfirm();
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Rezerwacja wizyty</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <h5>Szczegóły wizyty:</h5>
            Lekarz: {title}
            <br />
            Data: {formattedDate}
          </div>
          <Form.Group className="mb-3" controlId="calendarFormPhoneNumber">
            <Form.Label>Telefon kontaktowy</Form.Label>
            <Form.Control type="text" {...register("phoneNumber")} />
            {errors.phoneNumber && (
              <p className="error-message mt-1">{errors.phoneNumber.message}</p>
            )}
          </Form.Group>
          <Form.Group controlId="calendarFormEmail" className="mb-4">
            <Form.Label>Adres email</Form.Label>
            <Form.Control type="email" {...register("email")} />
            {errors.email && (
              <p className="error-message mt-1">{errors.email.message}</p>
            )}
          </Form.Group>
          <Modal.Footer>
            <Button variant="success" type="submit">
              Zarezerwuj wizytę
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
