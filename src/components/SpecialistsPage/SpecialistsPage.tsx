import { useState } from "react";
import { DoctorsSchedule } from "../DoctorsSchedule/DoctorsSchedule";
import "./SpecialistsPage.css";
import { DOCTORS } from "./specialistspage.const";

export function SpecialistsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = DOCTORS.filter((doctor) =>
    doctor.person.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="SpecialistsPage">
      <DoctorsSchedule
        classname="specialists-page-background-color"
        shouldShowInput={true}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        filteredDoctors={filteredDoctors}
      />
    </div>
  );
}
