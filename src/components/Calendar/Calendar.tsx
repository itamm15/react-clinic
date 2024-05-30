import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import { DOCTOR_APPOINTMENTS } from "./consts";
import { EventClickArg, EventSourceInput } from "@fullcalendar/core";
import "./Calendar.css";
import { Dispatch, ReactElement, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom";

type AppointmentEventProps = {
  id: string;
  title: string;
  start: string;
};

export function Calendar() {
  const queryParams = new URLSearchParams(useLocation().search);
  const doctorId = queryParams.get("doctorId");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<EventClickArg | null>(
    null,
  );

  const handleEventClick = (event: EventClickArg) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setShowModal(false);
  };

  console.log(doctorId);

  const doctorAppointmentEvents: EventSourceInput = DOCTOR_APPOINTMENTS.reduce(
    (acc: AppointmentEventProps[], appointment) => {
      const doctorAppointment = {
        id: appointment.id.toString(),
        title: appointment.person + ", " + appointment.title,
        start: appointment.date,
      };

      if (!doctorId) acc.push(doctorAppointment);
      if (doctorId === appointment.doctorId.toString())
        acc.push(doctorAppointment);

      return acc;
    },
    [],
  );

  return (
    <div className="d-flex justify-content-center align-items-center calendar-container">
      <FullCalendar
        plugins={[listPlugin]}
        initialView="listWeek"
        events={doctorAppointmentEvents}
        height={"auto"}
        locale={"pl"}
        eventColor="#198754"
        noEventsText="Brak wizyt, proszę spróbowac ponownie później"
        eventClick={handleEventClick}
      />

      <AppointmentModal
        showModal={showModal}
        setShowModal={handleCloseModal}
        selectedEvent={selectedEvent}
      />
    </div>
  );
}

type AppointmentModalProps = {
  showModal: boolean;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
  selectedEvent: EventClickArg | null;
};

function AppointmentModal({
  showModal,
  setShowModal,
  selectedEvent,
}: AppointmentModalProps): ReactElement {
  const title: string = selectedEvent?.event.title ?? "";
  const date: Date | string = selectedEvent?.event.start ?? "";
  const formattedDate: string = date.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Rezerwacja wizyty</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="mb-3">
            <h5>Szczegóły wizyty:</h5>
            Lekarz: {title}
            <br />
            Data: {formattedDate}
          </div>
          <Form.Group className="mb-3" controlId="calendarFormPhoneNumber">
            <Form.Label>Telefon kontaktowy</Form.Label>
            <Form.Control type="string"></Form.Control>
            <Form.Text className="text-muted">Podaj numer kontaktowy</Form.Text>
          </Form.Group>
          <Form.Group controlId="calendarFormEmail">
            <Form.Label>Adres email</Form.Label>
            <Form.Control type="email"></Form.Control>
            <Form.Text className="text-muted">Podaj adres email</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success">Zarezerwuj wizytę</Button>
      </Modal.Footer>
    </Modal>
  );
}
