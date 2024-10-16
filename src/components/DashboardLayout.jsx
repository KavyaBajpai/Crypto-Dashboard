import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";



const DashboardLayout= ({title,children})=> {
  return (
   <>
     <Header title={title}/>
     <Navbar/>
     <div>
        {children}
     </div>
     <Footer/>
   </>
  )
}

export default DashboardLayout
