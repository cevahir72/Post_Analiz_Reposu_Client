import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorNote, successNote } from '../utils/ToastNotify';
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
    className="container justify-content-center "
    style={{ height: "87vh" , fontFamily:"Quicksand",display:"flex", justifyContent:"center", alignItems:"center"}}
  >
      <div style={{width:"40%",height:"50vh", border:"1px solid #ddd", borderRadius:"7px", padding:"2rem"}}>
      <h1 style={{textAlign:"center"}}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center", marginTop:"2rem"}}>
          <input
            type="text"
            id="username"
            placeholder="Username..."
            name="username"
            value={userInfo.username}
            onChange={(e) => onChange(e)}
            style={{border:"1px solid black",borderRadius:"10px", padding:"2px 5px",width:"60%"}}
          />
        </div>
        <div style={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center", marginTop:"1.5rem"}}>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={(e) => onChange(e)}
            style={{border:"1px solid black",borderRadius:"10px", padding:"2px 5px", width:"60%"}}
          />
        </div>
        <div style={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center", marginTop:"1.5rem"}}>
        <button
        style={{width:"60%", borderRadius:"10px",padding:"2px"}}
         type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  </div>
  );
};

export default Login