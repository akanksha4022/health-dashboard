import React from 'react'
import { PiStethoscope } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";

const Card = ({title, number, barValue, percent, trend, color, icon}) => {
  return (
    <div className='sm:col-span-2 sm:row-span-1 min-h-40 bg-transparent rounded-lg flex flex-col p-4 border border-stone-300 gap-6 shadow'>
        <div className='flex gap-3 items-center'>
            {React.cloneElement(icon, {
                className: 'text-3xl  rounded-full  p-1',
                style: {backgroundColor: `${color}33`,color: `${color}` }
            })}
            {/* <PiStethoscope className={``} style={{backgroundColor: `${color}33`,color: `${color}` }} /> */}
            <span className='text-lg font-["Gilroy-semibold"]'>{title}</span>
        </div>
        <div className='flex flex-col gap-1'>
            <span className='font-bold text-2xl'>{number}</span>
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
