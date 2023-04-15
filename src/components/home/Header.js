import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ background: "#CD9B4F", color: "white" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand  style={{ color: "white" }} href="#home">
          <b>Furni-Scope</b> 
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "white" }} href="#features">
              Register
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#pricing">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
