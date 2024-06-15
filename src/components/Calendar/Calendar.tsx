import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import { DOCTOR_APPOINTMENTS } from "./consts";
import { EventClickArg, EventSourceInput } from "@fullcalendar/core";
import { useLocation } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { AppointmentModal } from "./AppointmentModal";
import { ConfirmationModal } from "./AppointmentModalConfirmation";
import { useState } from "react";
import "./Calendar.css";

type AppointmentEventProps = {
  id: string;
  title: string;
  start: string;
};

export function Calendar() {
  const { user } = useUser();
  const queryParams = new URLSearchParams(useLocation().search);
  const doctorId = queryParams.get("doctorId");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<EventClickArg | null>(null);

  const handleEventClick = (event: EventClickArg) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setShowModal(false);
  };

  const handleShowConfirmationModal = () => {
    setShowModal(false);
    setConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmationModal(false);
  };

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
        user={user}
        onConfirm={handleShowConfirmationModal}
      />

      <ConfirmationModal
        showModal={confirmationModal}
        handleClose={handleCloseConfirmationModal}
      />
    </div>
  );
}

export default Calendar;
