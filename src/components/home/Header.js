import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import sofa from "../../assets/sofa.png"


const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ background: "#31375B", color: "white" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand  style={{ color: "white" }} href="#">
          <div style={{display:"flex", flexDirection:"row"}}>
            <span> <img src={sofa} alt="resim" style={{width:"30px", marginRight:"7px", marginLeft:"10px"}}/> </span>
            <span><b>Furni-Scope</b>  </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "white" }} href="/register">
              Register
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
