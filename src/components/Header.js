import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import sofa from "../assets/sofa.png"




const Header = () => {


  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ background: "#31375B", color: "white" ,marginBottom:"3rem"}}
      variant="dark"
    >
      <Container>
        <Navbar.Brand  style={{ color: "white" }} href="/">
          <div style={{display:"flex", flexDirection:"row"}}>
            <span> <img src={sofa} alt="resim" style={{width:"30px", marginRight:"7px", marginLeft:"10px"}}/> </span>
            <span><b>Furni-Scope</b>  </span>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
