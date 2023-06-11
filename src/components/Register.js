import React, {useState} from "react";
import { errorNote, successNote } from '../utils/ToastNotify';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;


const Register = () => {

  const [user, setUser] = useState({})

  const onChange = (e) => {
      setUser({...user,[e.target.name]:e.target.value})
  }

  const navigate = useNavigate()

  const Submit = async (e)=>{
    e.preventDefault();
    try {
        const resp = await axios
        .post(`${apiUrl}/auth/register`,  user )
        if(resp.status ===  200){
          successNote(resp.data.message);
          navigate(`/login`);
        }else {
          errorNote('An error occurred during registration.');
        }
    } catch (error) {
        errorNote(error.response.data.message);
    }
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
        <div className=" col-md-6 col-sm-8" style={{border:"1px solid #ddd", borderRadius:"10px", padding:"70px 50px",background:"white",boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px", marginBottom:"3rem"}}>
        <h1 className="mt-3" style={{ textAlign:"center",  }}>KAYIT</h1>
        <form onSubmit={Submit}>
        <div style={{width:"100%", height:"2rem", margin:"1rem 0", display:"flex", justifyContent:"center", marginTop:"2rem"}}>
         
          <input type="text"
          name="username"
          placeholder="Username..."
           value={user.username} 
           style={{width:"80%", borderRadius:"10px", border:"1px solid black",paddingInline:"0.5rem", height:"2.1rem"}}
           onChange={(e) => onChange(e)} />
        </div>
        <div style={{width:"100%", height:"2rem", margin:"1rem 0", display:"flex", justifyContent:"center"}}>
       
          <input type="password"
          placeholder="Password..."
           value={user.password} 
           style={{width:"80%", borderRadius:"10px", border:"1px solid black",paddingInline:"0.5rem", height:"2.1rem"}}
           onChange={(e) => onChange(e)}
           name="password"
           />
        </div>
        <div style={{width:"100%", height:"2rem", margin:"1rem 0", display:"flex", justifyContent:"center"}}>
         
          <input type="password" 
          placeholder="Repeat Password..."
          value={user.password2} 
          style={{width:"80%", borderRadius:"10px", border:"1px solid black",paddingInline:"0.5rem", height:"2.1rem"}}
          onChange={(e) => onChange(e)}
          name="password2"
          />
        </div>
        <div style={{width:"100%", height:"2rem", margin:"1rem 0", display:"flex", justifyContent:"center",marginTop:"2rem"}}>
            <button 
            style={{width:"80%", borderRadius:"10px", height:"2.1rem",background: "#31375B", color: "white",border:"1px solid #31375B"}}
            type="submit">GİRİŞ</button>
        </div>
        
      </form>
        <div style={{width:"100%", height:"2rem", margin:"1rem 0",display:"flex", justifyContent:"center"  }}>
          <div  style={{width:"80%"}}>
              <p className="mt-1">Hesabınız var mı?</p>
              <span><a href="/login">Giriş</a> </span>
          </div>
          </div>
        
      
      </div>
      </div>
    </div>
  );
};

export default Register;
