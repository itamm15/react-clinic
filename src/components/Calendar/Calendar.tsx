import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import { DOCTOR_APPOINTMENTS } from "./consts";
import { EventClickArg, EventSourceInput } from "@fullcalendar/core";
import "./Calendar.css";
import { Dispatch, SyntheticEvent, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export function Calendar() {
  const [showModal, setShowModal] = useState<boolean>(false);

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
        eventClick={onClickCalendarEvent}
      />


      <Modal show={showModal} onHide={(() => setShowModal(false))}>
        <Modal.Header closeButton>
          <Modal.Title>Rezerwacja wizyty</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Rezerwacja wizyty</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">
            Zarezerwuj wizytę
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

  function onClickCalendarEvent(event: EventClickArg) {
    setShowModal(true);
  }
}
