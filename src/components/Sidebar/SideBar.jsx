import React from 'react'
import { NavLink } from 'react-router-dom';
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiStethoscope } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className='w-65 bg-[#fff] border-r-[1.8px] border-[#c7c7c7]'>
      <aside className='flex flex-col gap-4'>
        <div className='border-b-[1.8px] border-[#c7c7c7] py-1 h-18'>
          <p className='px-5 py-4'>logo</p>
        </div>

        <div className='flex flex-col gap-3 px-4 '>
          <p className='text-[0.9rem] text-[#716f6f] px-2'>Main Menu</p>

          <nav className='flex flex-col gap-4'>
            <NavLink to="/" className={({isActive})=>`flex items-center  gap-2 px-2 py-2 rounded-xl  ${isActive ? "bg-[#008171] text-white":" "}`}> 
              <MdOutlineSpaceDashboard className='text-xl' />
              <p className='text-subtitle'>Dashboard</p>
            </NavLink>

            <NavLink to="/Appointments" className={({isActive})=>`flex items-center  gap-2 px-2 py-2 rounded-xl  ${isActive ? "bg-[#008171] text-white":" "}`}>
              <PiStethoscope className='text-xl' />
              <p className='text-subtitle'>Appointments</p>
            </NavLink>

            <NavLink to="/Patient" className={({isActive})=>`flex items-center  gap-2 px-2 py-2 rounded-xl  ${isActive ? "bg-[#008171] text-white":" "}`}> 
              <IoPerson className='text-xl' />
              <p className='text-subtitle'>Patient</p>             
            </NavLink>            

          </nav>
        </div>
      </aside>
    </div>
  )
}

export default SideBar
