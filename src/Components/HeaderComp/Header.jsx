import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/images/logo.png";
import { CgMoreVerticalO } from "react-icons/cg";
import "./header.css";

function Header() {
  return (
    <>
   <div className="container ">
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="">
          <Container className='position-absolute header-wrapper'>
            <Navbar.Brand href="#"> <img src={logo} alt=""  className='img-fluid'/></Navbar.Brand>
            <Navbar.Toggle><CgMoreVerticalO  className='navbar-toggler-icons'/>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        <img src={logo} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About Us</Nav.Link>
                  <Nav.Link href="#action2">Services</Nav.Link>
                  <Nav.Link href="#action2">Pakages</Nav.Link>
                  <Nav.Link href="#action2">Our Projects</Nav.Link>
                  <Nav.Link href="#action2">Blog</Nav.Link>
                   <Button className="header-btn">Contact Us</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}  
   </div>
    </>
  );
}

export default Header;