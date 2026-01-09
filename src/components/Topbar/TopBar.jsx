import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import avatar from '../../data/avatar.jpg'
import { IoIosArrowDown } from "react-icons/io";

const TopBar = () => {
  return (
    <header className='h-18  bg-white border-b-[1.8px] border-[#c7c7c7] flex justify-between px-6 py-4'>
      <div className='flex border border-[#c7c7c7] rounded-lg w-[40vw] items-center px-2 gap-2'>
        <CiSearch className='text-xl' />
        <input type="input" placeholder='search' className='w-full focus:outline-none' />
      </div>
      <div className='flex items-center gap-3'>
        <div className='flex items-center justify-center border-r border-[#c7c7c7] gap-4 p-3'>
          <div className=' border-2 border-black rounded-full w-5 h-5'>            
          </div>
          <FiMessageSquare className='text-[1.5rem] text-[#7a7a7a] strokeWidth={2.5}' />
          <IoNotificationsOutline className='text-[1.5rem] text-[#7a7a7a]' />
        </div>
        <div className='flex gap-3 items-center py-2 px-2 hover:bg-stone-200 transition-colors rounded-lg'>
          <img src={avatar} alt="profile" className='w-9 h-9 object-cover rounded-full' />
          <div className='flex flex-col gap-1'>
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
