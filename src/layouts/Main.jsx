import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



export default function Main(props) {
  return (
    <>
     <Navbar />
    
     <div className="md:h-[50%] md:w-[50%] md:rounded-full md:bg-gradient-to-r from-[#121226] to-[#0b094a] blur-[115px] absolute right-0 z-0"></div>
    
     {props.children}
    
     <Footer />
  
    </>

  )
}
