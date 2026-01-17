import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import avatar from '../../data/avatar.jpg'
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

const TopBar = ({setOpen}) => {
  return (
    <header className='h-18  bg-white border-b-[1.5px] border-[#c7c7c7] flex justify-between px-3 py-2 sm:px-6 sm:py-4 items-center'>
      <button onClick={()=>setOpen(true)} className='sm:hidden mr-4'>
        <CiMenuBurger />
      </button>
      <div className='flex border border-[#c7c7c7] rounded-lg w-full sm:w-[40vw] items-center px-1  sm:px-2 gap-2 h-9 sm:h-10'>
        <CiSearch className='text-xl' />
        <input type="input" placeholder='search' className='w-full focus:outline-none py-1' />
      </div>
      <div className='flex items-center gap-3'>
        <div className='flex items-center justify-center border-r border-[#c7c7c7] p-2 gap-2 sm:gap-4 sm:p-3'>
          <div className=' border-2 border-black rounded-full w-5 h-5'>            
          </div>
          <FiMessageSquare className='text-lg sm:2xl text-[#7a7a7a] strokeWidth={2.5}' />
          <IoNotificationsOutline className='text-lg sm:2xl text-[#7a7a7a]' />
        </div>
        <div className='flex gap-3 items-center px-0 py-2 sm:px-2 hover:bg-stone-200 transition-colors rounded-lg'>
          <img src={avatar} alt="profile" className='w-9 h-9 object-cover rounded-full' />
          <div className='flex-col gap-1 hidden sm:flex'>
            <span className='text-body'>momo</span>
            <span className='text-label'>admin</span>
          </div>
          <IoIosArrowDown className='text-xl text-[#7a7a7a]' />
          
        </div>
      </div>
      
    </header>
  )
}

export default TopBar
