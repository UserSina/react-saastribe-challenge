import { Container, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { CaretDownFill } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';

import logoShape from '../assets/shapes/rectangle-logo.png';

export default function AppNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <div className="logo-container">
            {/* Add "img-fluid" class to resize shape on smaller screens */}
            <img src={logoShape} alt="" />
            <Navbar.Brand className="brand m-0" href="/">
              SaasTribe
            </Navbar.Brand>
          </div>
          {/* TESTME: https://www.w3schools.com/howto/howto_css_image_text.asp */}
          <Navbar.Toggle aria-controls="my-navbar"></Navbar.Toggle>
          <Navbar.Collapse
            id="my-navbar"
            style={{
              backgroundColor: '#212429',
              zIndex: 999,
              paddingBottom: '20px',
            }}
          >
            <Nav className="ml-sm-auto mr-4" bg="dark">
              <Nav.Link as={Link} to="/" className="nav-item mr-3">
                Home
              </Nav.Link>
              <NavDropdown
                className="mr-3"
                title={
                  <span>
                    Company
                    <CaretDownFill className="ml-1" />
                  </span>
                }
                id="my-working-dropdown"
              >
                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-item mr-3">
                Accounts
                <CaretDownFill className="ml-1" />
              </Nav.Link>
              <Nav.Link className="nav-item mr-3">
                Products
                <CaretDownFill className="ml-1" />
              </Nav.Link>
            </Nav>
            <Button className="btn-radius mt-2">Purchase Now</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
