import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import DashboardLayout from './components/DashboardLayout'
import { Outlet } from 'react-router-dom'

function Layout() {
  const title = "layout"
  return (
    <>

      <DashboardLayout title={title} >
       <Outlet />
       </DashboardLayout>
     

    </>
  )
}

export default Layout