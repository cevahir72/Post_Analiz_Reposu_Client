import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";




const Header = () => {


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
      </Container>
    </Navbar>
  );
};

export default Header;
