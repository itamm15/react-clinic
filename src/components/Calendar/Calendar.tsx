import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import { DOCTOR_APPOINTMENTS, DoctorAppointment } from "./consts";
import { EventClickArg, EventSourceInput } from "@fullcalendar/core";
import { useLocation } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { AppointmentModal } from "./AppointmentModal";
import { ConfirmationModal } from "./AppointmentModalConfirmation";
import { useState, useMemo } from "react";
import "./Calendar.css";

export function Calendar() {
  const { user } = useUser();
  const queryParams = new URLSearchParams(useLocation().search);
  const doctorId = queryParams.get("doctorId");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<EventClickArg | null>(null);
  const [appointments, setAppointments] = useState<DoctorAppointment[]>(DOCTOR_APPOINTMENTS);

  const handleEventClick = (event: EventClickArg) => {
    const eventId = event.event.id;
    const appointment = appointments.find(app => app.id.toString() === eventId);

    if (appointment && !appointment.booked) {
      setSelectedEvent(event);
      setShowModal(true);
    }
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

  const handleConfirmAppointment = () => {
    if (selectedEvent) {
      const eventId = selectedEvent.event.id;
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id.toString() === eventId
            ? { ...appointment, booked: true }
            : appointment
        )
      );
      handleShowConfirmationModal();
    }
  };

  const doctorAppointmentEvents: EventSourceInput = useMemo(() => {
    return appointments
      .filter((appointment) => !doctorId || appointment.doctorId.toString() === doctorId)
      .map((appointment) => ({
        id: appointment.id.toString(),
        title: appointment.person + ", " + appointment.title,
        start: appointment.date,
        booked: appointment.booked,
        color: appointment.booked ? "grey" : "#198754",
      }));
  }, [appointments, doctorId]);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column calendar-container">
      <FullCalendar
        plugins={[listPlugin]}
        initialView="listWeek"
        events={doctorAppointmentEvents}
        height={"auto"}
        locale={"pl"}
        eventColor="#198754"
        noEventsText="Brak wizyt, proszę spróbowac ponownie później"
        eventClick={handleEventClick}
        eventContent={(eventInfo) => (
          <div style={{ opacity: eventInfo.event.extendedProps.booked ? 0.5 : 1 }}>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </div>
        )}
      />

      <AppointmentModal
        showModal={showModal}
        setShowModal={handleCloseModal}
        selectedEvent={selectedEvent}
        user={user}
        onConfirm={handleConfirmAppointment}
      />

      <ConfirmationModal
        showModal={confirmationModal}
        handleClose={handleCloseConfirmationModal}
      />
    </div>
  );
}

export default Calendar;
