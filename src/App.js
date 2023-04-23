import React from "react";
import './App.css';
// 3rd party
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
//Containers
const DefaultLayout = React.lazy(()=> import("./views/DefaultLayout"))
//Pages
const Login = React.lazy(() => import("./components/Login"));
const Register = React.lazy(() => import("./components/Register"));
const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));
const Home = React.lazy(()=>import("./views/Home"))




function App() {
  return (
    <>
       <Router>
          <Routes>
            <Route
              exact
              path="/"
              name="Home"
              element={
                  <Home />
              } />
            <Route
              exact
              path="/login"
              name="Login Page"
              element={
                <>
                  <Header />
                  <Login />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              element={
                <>
                  <Header />
                  <Register />
                  <Footer />
                </>
              }
            />
            <Route
              path="*"
              name="Default"
              element={
                
                  <DefaultLayout />
               
              }
            />
          </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
