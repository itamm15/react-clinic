import doctorhomepage from "../../assets/doctorhomepage.jpg";

export function MainPageCard() {
  return (
    <div className="doctor-image-container">
    <div className="image-overlay" />
      <img className="doctor-image" src={doctorhomepage} alt="doctor with digitalizer" />
      <div className="text-overlay overlay-description">
        <h1 className="overlay-text">Konsultacje <br />Lekarzy<br /> Specjalistów</h1>
      </div>
    </div>
  )
}
