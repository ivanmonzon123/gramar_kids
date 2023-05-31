import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  style={{height: '6vh'}}>
      <Container>
        <Navbar.Brand href="#home">/GK/</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link href="#features" style={{color: 'rgb(255, 0, 115)'}}>Inicio</Nav.Link>
            <Nav.Link href="#pricing" style={{marginLeft: "50px"}}>Servicios</Nav.Link>
            <Nav.Link href="#pricing" style={{marginLeft: "50px"}}>Notas</Nav.Link>
            <Nav.Link href="#pricing" style={{marginLeft: "50px"}}>Contactos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
