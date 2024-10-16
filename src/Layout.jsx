import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import DashboardLayout from './components/DashboardLayout'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>

      <DashboardLayout >
       <Outlet />
       </DashboardLayout>
     

    </>
  )
}

export default Layout