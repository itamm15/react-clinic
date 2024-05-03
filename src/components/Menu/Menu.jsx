import { Navbar, Nav, Container } from 'react-bootstrap'

const MENU_ITEMS = [
  { link: '/', title: 'Strona główna' },
  { link: '/about', title: 'O nas' },
  { link: '/doctors', title: 'Specjaliści' },
  { link: '/services', title: 'Usługi' },
  { link: '/patient', title: 'Dla pacjenta' },
  { link: '/contact', title: 'Kontakt' },
]

export function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className="ms-4">
          <span>Przychodnia lekarska</span>
        </Navbar.Brand>
        <Navbar.Toggle id='basic-navbar-nav' />
        <Navbar.Collapse className="justify-content-end me-2" id="basic-navbar-nav">
          <Nav>
            {MENU_ITEMS.map((item) => (
              <Nav.Link key={item.link} href={item.link} className="text-dark me-2">
                {item.title.toUpperCase()}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
