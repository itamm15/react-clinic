import { Container } from 'react-bootstrap';
import doctorhomepage2 from "../../assets/doctorhomepage2.jpg";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="image-container">
      <img src={doctorhomepage2} alt="doctor with digitaizer" className="image" />
      <div class="green-overlay text-white">
        <h1>dsdas</h1>
      </div>
    </div>
  )
}
