import React, {useEffect,useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import sofa from "../../assets/sofa.png"
import { useNavigate } from "react-router-dom";
import { successNote } from "../../utils/ToastNotify";



const AppHeader = () => {
  const [id, setId] = useState("")

  const navigate = useNavigate();

//handles
const logout = ()=> {
    localStorage.clear();
   navigate("/");
   successNote("Good Bye!");
}
  
useEffect(() => {
  const id = localStorage.getItem("user") ;
  setId(id);
}, [])

  return (
    <Navbar
    collapseOnSelect
    expand="lg"
    style={{ background: "#31375B", color: "white" ,marginBottom:"3rem",fontFamily:"Quicksand"}}
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
          <Nav.Link style={{ color: "white",marginLeft:"10px" }} href="/post">
            Post
          </Nav.Link>
          <Nav.Link style={{ color: "white",marginLeft:"10px" }} href="/financing">
            Finansman
          </Nav.Link>
          <Nav.Link style={{ color: "white",marginLeft:"10px" }} href="/product">
            Ürün
          </Nav.Link>
          <Nav.Link style={{ color: "white",marginLeft:"10px" }} href="/answer">
            Cevaplar
          </Nav.Link>
          <Nav.Link style={{ color: "white",marginLeft:"10px" }} href="/analyze">
            Analiz
          </Nav.Link>
          <Nav.Link style={{ color: "white",marginLeft:"10px" }} href="/rival">
            Rakip
          </Nav.Link>
          <Nav.Link style={{ color: "white",marginLeft:"10px" }} href="/profile">
            Profil
          </Nav.Link>
          {
              id === '6483b235cfccda99d12a9c01' && (
                <Nav.Link style={{ color: "white",marginLeft:"10px"  }} href="/admin">
                Admin
              </Nav.Link>
              )
          }
        </Nav>
        <div onClick={logout} style={{color:"white", marginTop:"7px",cursor:"pointer",marginRight:"10px",marginLeft:"10px"}}>
          Çıkış
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppHeader