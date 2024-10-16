import React from 'react'
import { useState } from 'react'


const Header = ({title}) => {
  const [isDropdown, setIsDropdown]= useState(false);

  const toggleDropdown= () => {
    setIsDropdown((prev)=> !(prev))
  }
  return (
   <>
    <div className='w-[1184px] h-[64px] relative'>
       <div className='w-[1184px] h-[64px] absolute top-0 right-0'>
         <div className='px-6 py-1 flex justify-between'>
           <p>{title}</p>
           <div onClick={toggleDropdown} className='h-[50px] w-[50px] rounded-full border-black'>
            <p>Actions</p>
           </div>
           {
             isDropdown && (
               <div className='bg-white flex shadow-lg rounded-lg absolute top-[64px] right-0 w-[150px]'>
                 <ul className='flex flex-col gap-2'>
                   <li className='flex justify-center text-gray-800 hover:bg-gray-300'>Logout</li>
                   <li className='flex justify-center text-gray-800 hover:bg-gray-300'>Support</li>
                 </ul>
               </div>
             )
           }
         </div>
       </div>
    </div>
   </>
  )
}

export default Header

//positioning of elements to strict corners

//position of the parent element must be relative
//position of the child element must be absolute