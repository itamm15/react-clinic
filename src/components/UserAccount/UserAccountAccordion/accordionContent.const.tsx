import { ReactElement } from "react";

type AccordionSections = {
  title: string;
  body: ReactElement;
};

export const accordionContent: AccordionSections[] = [
  {
    title: "Następna wizyta",
    body: (
      <>
        <p>
          Twoja następna wizyta jest zaplanowana na 25 czerwca 2024 roku o
          godzinie 15:00.
        </p>
        <h5>Informacje:</h5>
        <p>
          <strong>Data:</strong> 25 czerwca 2024
        </p>
        <p>
          <strong>Godzina:</strong> 15:00
        </p>
        <p>
          <strong>Lekarz:</strong> Dr. Anna Nowak
        </p>
        <p>
          <strong>Specjalizacja:</strong> Kardiolog
        </p>
      </>
    ),
  },
  {
    title: "Recepty",
    body: (
      <>
        <p>Masz aktualnie 3 recepty:</p>
        <p>
          <strong>Paracetamol:</strong> 2 razy dziennie
        </p>
        <p>
          <strong>Ibuprofen:</strong> 3 razy dziennie
        </p>
        <p>
          <strong>Amoksycylina:</strong> 1 raz dziennie
        </p>
        <p>Skontaktuj się z lekarzem, jeśli potrzebujesz odnowić recepty.</p>
      </>
    ),
  },
  {
    title: "Lekarstwa",
    body: (
      <>
        <p>Aktualnie przyjmujesz następujące lekarstwa:</p>
        <p>
          <strong>Paracetamol 500mg:</strong> dwa razy dziennie
        </p>
        <p>
          <strong>Witamina D:</strong> raz dziennie
        </p>
        <p>
          <strong>Metformina 850mg:</strong> raz dziennie
        </p>
        <p>
          Pamiętaj o regularnym przyjmowaniu lekarstw zgodnie z zaleceniami
          lekarza.
        </p>
      </>
    ),
  },
  {
    title: "Historia wizyt",
    body: (
      <>
        <p>Ostatnie wizyty:</p>
        <p>
          <strong>10 maja 2024:</strong> Dr. Kowalski - Konsultacja ogólna
        </p>
        <p>
          <strong>15 marca 2024:</strong> Dr. Nowak - Badanie kontrolne
        </p>
        <p>
          <strong>20 stycznia 2024:</strong> Dr. Wiśniewski - Konsultacja
          specjalistyczna
        </p>
        <p>Pełną historię wizyt możesz zobaczyć w swoim profilu pacjenta.</p>
      </>
    ),
  },
];
