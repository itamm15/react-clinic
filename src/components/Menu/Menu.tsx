import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FaPhone } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import { IoMdClock } from "react-icons/io";
import clinicicon from "../../assets/clinic-icon.png";
import "./Menu.css";

type MenuItem = {
  link: string;
  title: string;
};

const MENU_ITEMS: MenuItem[] = [
  { link: "/", title: "Strona główna" },
  { link: "/about", title: "O nas" },
  { link: "/doctors", title: "Specjaliści" },
  { link: "/services", title: "Usługi" },
  { link: "/contact", title: "Kontakt" },
];

export function Menu() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar-border">
        <Container fluid>
          <Navbar.Brand className="d-flex align-items-center ms-2">
            <h3 className="me-2 mb-0">Przychodnia lekarska</h3>
            <img
              src={clinicicon}
              style={{ width: "40px", height: "40px" }}
              alt="clinic icon"
            />
          </Navbar.Brand>
          <Navbar.Toggle id="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end me-2"
            id="basic-navbar-nav"
          >
            <Nav>
              {MENU_ITEMS.map((item) => (
                <Nav.Link
                  key={item.link}
                  href={item.link}
                  className="text-dark me-2 text-decoration-underline-class"
                >
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0">{item.title.toUpperCase()}</h5>
                  </div>
                </Nav.Link>
              ))}
              <Button className="me-2" variant="success" href="/account">
                Moje konto
              </Button>
              <Button className="me-2" variant="success" href="/calendar">
                Umów wizytę
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="bg-body-tertiary pt-2 pb-3">
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="text-center">
            <h5>Lokalizacja:</h5>
            <div className="d-flex justify-content-center align-items-center">
              <MdPlace />
              <p className="ms-2 mb-0">Nad Reglami 23, 34-520 Zakopane</p>
            </div>
          </Col>
          <Col className="text-center">
            <h5>Godziny otwarcia:</h5>
            <div className="d-flex justify-content-center align-items-center">
              <IoMdClock />
              <p className="ms-2 mb-0">Poniedziałek - Piatek: 8:00 - 19:00</p>
            </div>
          </Col>
          <Col className="text-center">
            <h5>Numer kontaktowy:</h5>
            <div className="d-flex justify-content-center align-items-center">
              <FaPhone />
              <p className="ms-2 mb-0">+48 123 456 789</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
