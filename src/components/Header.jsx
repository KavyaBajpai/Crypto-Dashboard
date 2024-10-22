import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar';



const Header = ({ title }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isSideNav, setIsSideNav] = useState(false)

  const toggleSideNav = () => {
    setIsSideNav((prev) => !prev)
  }

  const toggleDropdown = () => {
    setIsDropdown((prev) => !(prev))
  }
  console.log(title);
  return (
    <>
      <div className='relative'>
        <div className='w-screen h-[80px] flex justify-between items-center pr-2 pl-7 bg-gray-700 shadow-xl absolute top-0 right-0'>
          {/* menu-image-div */}
          <div onClick={toggleSideNav} className='rounded-full border-black flex justify-center items-center'>
            <img src="./menuIcon.jpg" className='h-[40px] w-[40px] hover:cursor-pointer rounded-full' />
          </div>
          {

            isSideNav && (
              
                <div className='absolute left-0 top-2 z-10'>
                  <Navbar />
               
              </div>

            )

          }
          {/* text-div */}
          <div>
            <p className='bg-[gray-700] text-2xl font-medium text-white'>{title}</p>
        </div>


          <div onClick={toggleDropdown} className=' rounded-full border-black flex justify-center items-center mr-1'>
            <img src="./profileIcon.jpg" className='h-[40px] w-[40px] cursor-pointer rounded-full shadow-xl' />
          </div>
          {
            isDropdown && (
              <div className='bg-gray-300 flex shadow-xl absolute top-[80px] p-2 right-0 w-[150px]'>
                <ul className='flex flex-col gap-2'>
                  <li className='flex justify-center text-gray-800 font-medium hover:bg-gray-300 display-block'>Logout</li>
                  <li className='flex justify-center text-gray-800 font-medium hover:bg-gray-300'>Support</li>
                </ul>
              </div>
            )
          }
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Header

//positioning of elements to strict corners

//position of the parent element must be relative
//position of the child element must be absolute