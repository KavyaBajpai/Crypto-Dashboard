import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Transactions from './pages/Transactions/Transactions.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'

const router= createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={ <Layout/> }>
       <Route index element={<Dashboard />} />
       <Route path='/transactions' element={ <Transactions />}/>
       <Route path='/contact' element={ <Contact />} />
    </Route>
   )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
