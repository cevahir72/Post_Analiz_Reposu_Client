import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";

import * as yup from "yup";
// import auth from "../server/firebase";


const Register = () => {


  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: yup.object().shape({
      username: yup
        .string()
        .min(3, "Too short!")
        .max(15, "Too long!")
        .required("Name is required"),
      email: yup
        .string()
        .email("Email is invalid")
        .required("Email is required"),
      password: yup
        .string()
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
      password2: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match")
        .required("Confirm password is required"),
    }),
    onSubmit:  (values) => {
      
    },
  });

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "87vh" }} >
      
      <div className="row " style={{width:"500px", height:"600px"}}>
        <div className=" col-md-12 col-sm-8" style={{border:"1px solid #ddd", borderRadius:"10px", padding:"20px 30px"}}>
        <h2 className="mt-3" style={{ textAlign:"center" }}>Register</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group style={{marginTop:"20px"}} controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.username && !!formik.errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email" style={{marginTop:"20px"}}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && !!formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password" style={{marginTop:"20px"}}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.password && !!formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password2" style={{marginTop:"20px"}}>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={formik.values.password2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.password2 && !!formik.errors.password2}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password2}
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
