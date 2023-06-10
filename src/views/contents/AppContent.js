import React from 'react';
import { useLocation } from 'react-router-dom';
//components
import Financing from "../../components/Financing";
import Product from "../../components/Product";
import Analyze from "../../components/Analyze";
import Profile from "../../components/Profile";
import Answer from "../../components/Answer";
import Post from "../../components/Post";
import Admin from "../../components/Admin";

const AppContent = () => {

  const location = useLocation().pathname

  if(location.split("/")[1] === "financing"){
    return  <Financing/>
  }else if (location.split("/")[1] === "product"){
    return <Product/>
  }else if (location.split("/")[1] === "analyze"){
    return <Analyze/>
  }else if (location.split("/")[1] === "profile"){
    return <Profile/>
  }else if (location.split("/")[1] === "answer"){
    return <Answer/>
  }else if (location.split("/")[1] === "post"){
    return <Post/>
  }else if (location.split("/")[1] === "admin"){
    return <Admin/>
  }
    
}

export default AppContent