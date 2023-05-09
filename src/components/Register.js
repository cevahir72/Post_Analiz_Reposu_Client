import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onChangeRegister } from "../services/authSlice";
import { Formik } from "formik";
import * as yup from "yup";

const Register = () => {
  const dispatch = useDispatch();

  // Handlers
  const register = async (values) => {
    // await axios
    //     .post("/api/auth/register", { values })
    //     .then((result) => {
    //         if (result.status === 200) {
    //             successNote(result.data.message);
    //         }
    //     })
    //     .catch((error) => {
    //         errorNote(error.response.data.message);
    //     });
    console.log(values);
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Too short!")
      .max(15, "Too long!")
      .required("Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
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
  });
 
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-start h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <Formik
                      validationSchema={schema}
                      onSubmit={register}
                      initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        password2: "",
                      }}
                    >
                      {({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        errors,
                      }) => (
                        <form
                          className="mx-1 mx-md-4 needs-validation"
                          noValidate
                        >
                          <div className="input-group mb-3">
                            <span
                              style={{ width: "50px" }}
                              class="input-group-text"
                              id="basic-addon1"
                            >
                              <i class="fa-solid fa-user"></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={values.name}
                              aria-label="Username"
                              placeholder="Username"
                              aria-describedby="basic-addon1"
                              onChange={handleChange}
                            />
                            <div className="invalid-feedback">{errors.name}</div>
                          </div>
                          <div class="input-group mb-3">
                            <span
                              style={{ width: "50px" }}
                              class="input-group-text"
                              id="basic-addon1"
                            >
                              <i class="fa-solid fa-envelope"></i>
                            </span>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={values.email}
                              aria-label="Email"
                              placeholder="Email"
                              aria-describedby="basic-addon1"
                              onChange={handleChange}
                            />
                            <div className="invalid-feedback">{errors.email}</div>
                          </div>
                          <div className="input-group mb-3">
                            <span
                              style={{ width: "50px" }}
                              class="input-group-text"
                              id="basic-addon1"
                            >
                              <i class="fa-solid fa-lock"></i>
                            </span>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              value={values.password}
                              aria-label="Password"
                              placeholder="Password"
                              aria-describedby="basic-addon1"
                              onChange={handleChange}
                            />
                            <div className="invalid-feedback">{errors.password}</div>
                          </div>
                          <div class="input-group mb-3">
                            <span
                              style={{ width: "50px" }}
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              <i class="fa-solid fa-key"></i>
                            </span>
                            <input
                              type="password"
                              className="form-control"
                              name="password2"
                              value={values.password2}
                              placeholder="Repeat your password"
                              aria-label="Password2"
                              aria-describedby="basic-addon1"
                              onChange={handleChange}
                            />
                            <div className="invalid-feedback">{errors.password2}</div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <label
                              className="form-check-label"
                              htmlFor="form2Example3"
                            >
                              Have an account ? <a href="/login">Login</a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                              onSubmit={handleSubmit}
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
