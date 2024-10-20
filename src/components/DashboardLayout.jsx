import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";



const DashboardLayout= ({title,children})=> {
  console.log('DashboardLayout is rendering'); 
  return (
   <>
     <Header title={title}/>
     <div>
        {children}
     </div>
     <Footer/>
   </>
  )
}

export default DashboardLayout
