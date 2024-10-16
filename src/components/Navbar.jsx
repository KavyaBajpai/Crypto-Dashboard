import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
     
     <div className='bg-white h-[900px] w-[256px]'>
        <h2 className='text-[#5F00D9]'>@DOSOMECODING</h2>
        <div className='flex flex-col justify-between'>
           <ul className='flex flex-col gap-2'>
           <li className='flex gap-3 p-2 rounded-lg bg-white'>
             <Link to="/">
             <img src="./Dashboard.png" />
             <p>Dashboard</p>
             </Link>
           </li >

           <li className='flex gap-3 p-2 rounded-lg bg-white'>
             <Link to="/transactions">
             <img src="./Transactions.png" />
             <p>Transactions</p>
             </Link>
           </li>

           <li className='flex gap-3 p-2 rounded-lg bg-white'>
             <Link to="/contact">
             <img src="/Transactions.png" />
             <p>Contact Us</p>
             </Link>
           </li>
           </ul>

           <div>
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