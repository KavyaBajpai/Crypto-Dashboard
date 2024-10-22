import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";



const DashboardLayout= ({title,children})=> {
  console.log('DashboardLayout is rendering'); 
  return (
   <>
     <div className='min-h-screen flex flex-col justify-between'>
      <Header title={title}/>
       <div className='flex-grow'>
        {children}
       </div>
      <Footer/>
     </div>
   </>
  )
}

export default DashboardLayout
