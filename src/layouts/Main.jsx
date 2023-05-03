import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLocation } from "react-router-dom"


export default function Main() {
  const location = useLocation();
  if(location.pathname !== '/'){
    return <Outlet />
  }
  return (
    <>
     <Navbar  />

     <Outlet/>
     
     <Footer />
  
    </>

  )
}
