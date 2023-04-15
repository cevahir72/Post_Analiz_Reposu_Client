import React from 'react';
//components
import AppContent from "./contents/AppContent";
import AppHeader from "./contents/AppHeader";
import AppFooter from "./contents/AppFooter";


const DefaultLayout = () => {
  return (
    <div>
      <AppHeader/>
      <AppContent/>
      <AppFooter/>
    </div>
  )
}

export default DefaultLayout