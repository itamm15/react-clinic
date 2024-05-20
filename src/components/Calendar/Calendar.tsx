import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import { DOCTOR_APPOINTMENTS } from "./consts";
import { EventSourceInput } from "@fullcalendar/core";
import "./Calendar.css";

export function Calendar() {
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
      />
    </div>
  );
}
