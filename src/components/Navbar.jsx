import {React,useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar= ({})=> {
  
  return (
    <>
     
     
       
     <div className='relative'>
        <div className='flex flex-col bg-gray-300 p-4 absolute ml-2 left-0 top-[72px] h-auto min-w-[200px]'>
           <div className='flex flex-col mt-10'>
           <h2 className='text-gray-600 text-2xl font-bold ml-1'>CRYPTEC</h2>
           <ul className='flex flex-col gap-2 mt-8'>
           <li className='flex gap-3 p-2 rounded-lg bg-white hover:bg-gray-100'>
             <Link to="/" className='flex gap-1'>
             <img src="./Dashboard.png" className='mt-[4px] h-[15px] w-[15px]'/>
             <p className='text-center font-medium'>Dashboard</p>
             </Link>
           </li >
 
           <li className='flex gap-3 p-2 rounded-lg bg-white hover:bg-gray-100'>
             <Link to="/transactions" className='flex gap-1'>
             <img src="./Transactions.png" className='mt-[4px] h-[18px] w-[18px]'/>
             <p className='text-center font-medium'>Transactions</p>
             </Link>
           </li>
 
           <li className='flex gap-3 p-2 rounded-lg bg-white hover:bg-gray-100'>
             <Link to="/contact" className='flex gap-1'>
             <img src="./Contact.png" className='mt-[4px] h-[18px] w-[18px]'/>
             <p className='text-center font-medium'>Contact Us</p>
             </Link>
           </li>
           </ul>
           </div>
 
           <div className='mt-[445px] w-auto h-fit flex justify-center items-center'>
             <div className='flex gap-2 bg-white px-7 py-1 rounded-md'>
                <img src="./Support.png" className='h-[20px] mt-[2px] w-[20px] rounded-full'/>
                <p className='text-center font-medium text-2lg text-gray-800 '>Support</p>
             </div>
           </div>
        </div>
      </div>
       
       
        
     
    
    </>
  )
}

export default Navbar

//to navigate to pages, use Link from react-router-dom