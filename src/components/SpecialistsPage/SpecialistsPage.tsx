import { useState } from "react";
import { DoctorsSchedule } from "../DoctorsSchedule/DoctorsSchedule";
import "./SpecialistsPage.css";
import { DOCTORS, Doctor } from "./specialistspage.const";
import { useNavigate } from "react-router-dom";

export function SpecialistsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = DOCTORS.filter((doctor) =>
    doctor.person.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const onPickDoctor = (
    event: React.MouseEvent<HTMLElement>,
    doctor: Doctor,
  ) => {
    navigate(`/calendar?doctorId=${doctor.id}`);
  };

  return (
    <div className="SpecialistsPage">
      <DoctorsSchedule
        classname="specialists-page-background-color"
        shouldShowInput={true}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        filteredDoctors={filteredDoctors}
        onPickDoctor={onPickDoctor}
      />
    </div>
  );
}
