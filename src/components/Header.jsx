import React from 'react'
import { useState } from 'react'


const Header = ({title}) => {
  const [isDropdown, setIsDropdown]= useState(false);

  const toggleDropdown= () => {
    setIsDropdown((prev)=> !(prev))
  }
  console.log(title);
  return (
   <>
    <div className='relative'>
       <div className='w-4/5 h-auto p-2 bg-gray-700 absolute top-0 right-0'>
         <div className='px-6 py-1 flex justify-between'>
           <p className='bg-[gray-700] text-white'>{title}</p>
          
           <div onClick={toggleDropdown} className='h-[50px] w-[50px] rounded-full border-black'>
            <img src="./profileIcon.jpg" className='cursor-pointer rounded-full shadow-xl'/>
           </div>
           {
             isDropdown && (
               <div className='bg-white flex shadow-lg rounded-lg absolute top-[75px] p-2 right-0 w-[150px]'>
                 <ul className='flex flex-col gap-2'>
                   <li className='flex justify-center text-gray-800 font-medium hover:bg-gray-300 display-block'>Logout</li>
                   <li className='flex justify-center text-gray-800 font-medium hover:bg-gray-300'>Support</li>
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