import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



const AppHeader = () => {

//handles
//buraya logout fonksiyonu gelecek



  return (
    <Navbar
    collapseOnSelect
    expand="lg"
    style={{ background: "#CD9B4F", color: "white" ,marginBottom:"3rem"}}
    variant="dark"
  >
    <Container>
      <Navbar.Brand  style={{ color: "white" }} href="/">
        <b>Furni-Scope</b> 
      </Navbar.Brand>
      <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse  id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link style={{ color: "white" }} href="/post">
            Post
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/financing">
            Financing
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/product">
            Product
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/analyze">
            Analyze
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/profile">
            Profile
          </Nav.Link>
          {/* <Nav.Link style={{ color: "white" }} href="/admin">
            Admin
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppHeader