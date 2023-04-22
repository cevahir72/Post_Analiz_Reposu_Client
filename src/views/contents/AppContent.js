import React from 'react';
import { useLocation } from 'react-router-dom';
//components
import Financing from "../../components/Financing";
import Product from "../../components/Product";
import Analyze from "../../components/Analyze";
import Profile from "../../components/Profile";
import Customer from "../../components/Customer";

const AppContent = () => {

  const location = useLocation().pathname

  console.log(location.split("/")[1])

  if(location.split("/")[1] === "financing"){
    return  <Financing/>
  }else if (location.split("/")[1] === "product"){
    return <Product/>
  }else if (location.split("/")[1] === "analyze"){
    return <Analyze/>
  }else if (location.split("/")[1] === "profile"){
    return <Profile/>
  }else if (location.split("/")[1] === "customer"){
    return <Customer/>
  }
    
  return (
    <div>AppContent</div>
  )
}

export default AppContent