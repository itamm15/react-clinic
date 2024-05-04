import { IoIosSad } from "react-icons/io";
import './NotFound.css';

export function NotFound() {
  return (
    <div className='not-found-container'>
      <div className="d-flex justify-content-center align-items-center">
        <IoIosSad className='not-found-icon' />
      </div>
        <br />
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="text-center">Strona nie znaleziona</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <h4 className="text-center">Przepraszamy, ale podana strona nie istnieje.</h4>
      </div>
    </div>
  )
}
