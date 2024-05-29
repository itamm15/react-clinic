import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import { DOCTOR_APPOINTMENTS } from "./consts";
import { EventClickArg, EventSourceInput } from "@fullcalendar/core";
import "./Calendar.css";
import {
  Dispatch,
  ReactElement,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function Calendar() {
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

  const doctorAppointmentEvents: EventSourceInput = DOCTOR_APPOINTMENTS.map(
    (appointment) => ({
      id: appointment.id.toString(),
      title: appointment.person + ", " + appointment.title,
      start: appointment.date,
    }),
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

function AppointmentModal({
  showModal,
  setShowModal,
  selectedEvent,
}: {
  showModal: boolean;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
  selectedEvent: EventClickArg | null;
}): ReactElement {
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
        <p>Rezerwacja wizyty</p>
        <Form>
          Szczegóły wizyty: <br />
          Lekarz: {title}
          <br />
          Data: {formattedDate}
          <Form.Group controlId="calendarFormPhoneNumber">
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
