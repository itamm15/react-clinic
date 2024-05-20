import { DoctorsSchedule } from "../DoctorsSchedule";
import { Trophy } from "../Trophy";
import { Specialists } from "../Specialists/Specialists";
import { ClinicDescriptionCard } from "../ClinicDescriptionCard";
import { MainPageCard } from "../MainPageCard";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <MainPageCard />
      <ClinicDescriptionCard />
      <Specialists />
      <Trophy />
      <DoctorsSchedule />
    </>
  );
}
