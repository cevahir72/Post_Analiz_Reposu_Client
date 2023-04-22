import React, { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="vh-100 mx-4">
    <div className="container-fluid h-custom mx-4" >
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className=" col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample"/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <button type="button" className="btn btn-primary btn-floating mx-1">
                 <i class="bi bi-facebook"></i>
              </button>
  
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i class="bi bi-twitter"></i>
              </button>
  
              <button type="button" className="btn btn-primary btn-floating mx-1">
              <i class="bi bi-linkedin"></i>
              </button>
            </div>
  
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
  
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid email address" 
                onChange={handleEmailChange}/>
              <label className="form-label" for="form3Example3">Email address</label>
            </div>
  
            {/* <!-- Password input --> */}
            <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password" 
                onClick={handlePasswordChange}/>
              <label className="form-label" for="form3Example4">Password</label>
            </div>
  
            <div className="d-flex justify-content-between align-items-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">Forgot password?</a>
            </div>
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="button" className="btn  btn-lg"
                style={{background:"#CD9B4F",color:"whitesmoke"}}
                onClick={handleSubmit}>Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                  className="link-danger">Register</a></p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
    
  </div>
  );
};

export default Login