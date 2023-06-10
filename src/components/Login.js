import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../services/authSlice";

const Login = () => {
  //hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo,setUserInfo] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ userInfo,navigate }));
  };

  const onChange = (e)=>{
    setUserInfo({...userInfo, [e.target.name] : e.target.value})
  }


  return (
    <div
    className="container d-flex justify-content-center align-items-center "
    style={{ minHeight: "85vh" , fontFamily:"Quicksand"}}
  >
    <div className="row w-100 d-flex justify-content-center align-items-center">
      <div className=" col-md-6 col-sm-8" style={{border:"1px solid #ddd", borderRadius:"10px", padding:"70px 50px",background:"white",boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px", marginBottom:"1rem"}}>
      <h1 style={{textAlign:"center"}}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={{width:"100%", height:"2rem", margin:"1rem 0", display:"flex", justifyContent:"center"}}>
          <input
            type="text"
            id="username"
            placeholder="Username..."
            name="username"
            value={userInfo.username}
            onChange={(e) => onChange(e)}
            style={{width:"80%", borderRadius:"10px", border:"1px solid black",paddingInline:"0.5rem", height:"2.1rem"}}
          />
        </div>
        <div style={{width:"100%", height:"2rem", margin:"1rem 0", display:"flex", justifyContent:"center"}}>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={(e) => onChange(e)}
            style={{width:"80%", borderRadius:"10px", border:"1px solid black",paddingInline:"0.5rem", height:"2.1rem"}}
          />
        </div>
        <div style={{width:"100%", height:"2rem", margin:"1rem 0",display:"flex", justifyContent:"center", marginTop:"2rem" }}>
        <button 
            style={{width:"80%", borderRadius:"10px", height:"2.1rem",background: "#31375B", color: "white",border:"1px solid #31375B"}}
            type="submit">LOGIN</button>
        </div>
        <div style={{width:"100%", height:"2rem", margin:"1rem 0", marginTop:"2rem" ,display:"flex", justifyContent:"center" }}>
          <div  style={{width:"80%"}}>
              <p className="mt-1">Dont you have an account?</p>
              <span><a href="/register">Register</a> </span>
          </div>
            
        </div>
        
      </form>
    </div>
    </div>
  </div>
  );
};

export default Login