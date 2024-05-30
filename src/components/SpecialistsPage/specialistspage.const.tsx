import { ReactElement } from "react";
import { IconBaseProps } from "react-icons";
import { CiStethoscope } from "react-icons/ci";
import { FaBrain, FaDiagnoses, FaHeartbeat, FaTooth } from "react-icons/fa";
import { LuBone } from "react-icons/lu";

export type Doctor = {
  id: number;
  person: string;
  title: string;
  days: string;
  time: string;
  icon: ReactElement<IconBaseProps>;
};

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    person: "Dr. Krzysztof Zjadek",
    title: "Kardiolog",
    days: "Poniedziałek - Piątek",
    time: "8:00 - 16:00",
    icon: <FaHeartbeat style={{ width: "70px", height: "70px" }} />,
  },
  {
    id: 2,
    person: "Dr. Karina Wojska",
    title: "Neurolog",
    days: "Poniedziałek - Czwartek",
    time: "8:00 - 12:00",
    icon: <FaBrain style={{ width: "70px", height: "70px" }} />,
  },
  {
    id: 3,
    person: "Dr. Karol Poss",
    title: "Ortopeda",
    days: "Wtorek - Piątek",
    time: "12:00 - 19:00",
    icon: <LuBone style={{ width: "70px", height: "70px" }} />,
  },
  {
    id: 4,
    person: "Dr. Karol Wojteka",
    title: "Stomatolog",
    days: "Poniedziałek - Piątek",
    time: "9:30 - 15:00",
    icon: <FaTooth style={{ width: "70px", height: "70px" }} />,
  },
  {
    id: 5,
    person: "Dr. Magdalena Kowalska",
    title: "Diabetolog",
    days: "Środa - Piątek",
    time: "8:30 - 19:00",
    icon: <FaDiagnoses style={{ width: "70px", height: "70px" }} />,
  },
  {
    id: 6,
    person: "Dr. Szymon Szczepała",
    title: "Pediatra",
    days: "Czwartek - Piątek",
    time: "8:00-19:00",
    icon: <CiStethoscope style={{ width: "70px", height: "70px" }} />,
  },
];
