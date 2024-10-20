import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
     
     <div className='bg-white h-auto p-3 w-1/5 bg-gray-200'>
       
        <div className='flex flex-col '>
           <div className='flex flex-col mt-10'>
           <h2 className='text-gray-600 text-2xl font-bold ml-1'>CRYPTEC</h2>
           <ul className='flex flex-col gap-2 mt-8'>
           <li className='flex gap-3 p-2 rounded-lg bg-white'>
             <Link to="/" className='flex gap-1'>
             <img src="./Dashboard.png" className='mt-[4px] h-[15px] w-[15px]'/>
             <p className='text-center font-medium'>Dashboard</p>
             </Link>
           </li >

           <li className='flex gap-3 p-2 rounded-lg bg-white'>
             <Link to="/transactions" className='flex gap-1'>
             <img src="./Transactions.png" className='mt-[4px] h-[18px] w-[18px]'/>
             <p className='text-center font-medium'>Transactions</p>
             </Link>
           </li>

           <li className='flex gap-3 p-2 rounded-lg bg-white'>
             <Link to="/contact" className='flex gap-1'>
             <img src="/Transactions.png" className='mt-[4px] h-[18px] w-[18px]'/>
             <p className='text-center font-medium'>Contact Us</p>
             </Link>
           </li>
           </ul>
           </div>

           <div className='mt-[465px]'>
             <div className='w-fit'>
                <img src="" className='h-[20px] w-[20px]'/>
                <p className='text-gray-500'>Support</p>
             </div>
           </div>
        </div>
        
      </div>
    
    </>
  )
}

export default Navbar

//to navigate to pages, use Link from react-router-dom