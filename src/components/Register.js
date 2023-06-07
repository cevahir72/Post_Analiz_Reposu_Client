import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import { errorNote, successNote } from '../utils/ToastNotify';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Register = () => {

  const [user, setUser] = useState({})

  const onChange = (e) => {
      setUser({...user,[e.target.name]:e.target.value})
  }

  const navigate = useNavigate()

  const Submit = async ()=>{
    await axios
    .post(`http://localhost:5000/api/auth/register`,  user )
    .then((result) => {
        successNote(result.data.message);
        navigate(`/login`);
      
    })
    .catch((error) => {
      errorNote(error.response.data.message);
    });
  }

  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //     password2: "",
  //   },
  //   validationSchema: yup.object().shape({
  //     username: yup
  //       .string()
  //       .min(3, "Too short!")
  //       .max(15, "Too long!")
  //       .required("Name is required"),
  //     password: yup
  //       .string()
  //       .min(8, "Password must be 8 characters long")
  //       .matches(/[0-9]/, "Password requires a number")
  //       .matches(/[a-z]/, "Password requires a lowercase letter")
  //       .matches(/[A-Z]/, "Password requires an uppercase letter")
  //       .matches(/[^\w]/, "Password requires a symbol"),
  //     password2: yup
  //       .string()
  //       .oneOf([yup.ref("password"), null], "Password must match")
  //       .required("Confirm password is required"),
  //   })
  // });

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "85vh",fontFamily:"Quicksand" }} >
      
      <div className="row w-100 d-flex justify-content-center align-items-center">
        <div className=" col-md-6 col-sm-8" style={{border:"1px solid #ddd", borderRadius:"10px", padding:"20px 30px"}}>
        <h2 className="mt-3" style={{ textAlign:"center" }}>Register</h2>
      <Form onSubmit={Submit}>
        <Form.Group style={{marginTop:"20px"}} controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={user.username}
            name="username"
            onChange={(e)=> onChange(e)}
            isInvalid={!user.username}
          />
          <Form.Control.Feedback type="invalid">
            {"Username required!"}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password" style={{marginTop:"20px"}}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={user.password}
            onChange={(e)=> onChange(e)}
            isInvalid={!user.password}
          />
          <Form.Control.Feedback type="invalid">
            {"Password is required"}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password2" style={{marginTop:"20px"}}>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={user.password2}
            onChange={(e)=> onChange(e)}
            isInvalid={!user.password2}
          />
          <Form.Control.Feedback type="invalid">
            {"Password2 required"}
          </Form.Control.Feedback>
        </Form.Group>
          <div className=" mt-4">
          <Button style={{background: "#CD9B4F", border:"1px solid #ddd"}} variant="primary" type="submit" className="w-100">
            {"Register"} 
        </Button>
          </div>
        
      </Form>
      <p className="mt-3">Already have an account?</p>
      <span><a href="/login">Login</a> </span>
      </div>
      </div>
    </div>
  );
};

export default Register;
