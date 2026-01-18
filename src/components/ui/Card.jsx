import React from 'react'
import { PiStethoscope } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";

const Card = ({title, number, barValue, percent, trend, color, icon}) => {
  return (
    <div className='sm:col-span-2 sm:row-span-1 h-full bg-white rounded-xl flex flex-col p-2 sm:p-3 border border-stone-300 gap-4 sm:gap-5 shadow-sm'>
        <div className='flex items-center gap-1 
        sm:gap-3'>
            <div className='w-10 h-10 flex items-center justify-center '>
            {React.cloneElement(icon, {
                className: 'text-2xl sm:text-3xl  rounded-full  p-1 ',
                style: {backgroundColor: `${color}33`,color: `${color}` }
            })}
            {/* <PiStethoscope className={``} style={{backgroundColor: `${color}33`,color: `${color}` }} /> */}
            
            </div>
            <span className=' text-base sm:text-lg font-["Gilroy-semibold"] line-clamp-1'>{title}</span>
        </div>
        
        <div className='flex flex-col gap-2'>
            <span className='font-bold text-xl sm:text-2xl'>{number}</span>
            <div className='h-2 rounded-full overflow-hidden bg-gray-300'>
                <div className={`h-full rounded-full transition-all`} style={{width:`${percent}%`, backgroundColor: `${color}`}}>
                        
                </div>

            </div>
        </div>
        <div className='flex gap-2 items-center text-xs text-stone-600'>
            <span className={`flex items-center gap-1 ${trend==="up"? "bg-green-200 text-green-600":"bg-red-200 text-red-600" } rounded-md px-1 py-[0.1rem]`}>
                {trend==="up" ?<FiArrowUpRight /> :<FiArrowDownRight /> }{percent}%
                
            </span>
            vs last month
        </div>
    </div>
  )
}

export default Card
