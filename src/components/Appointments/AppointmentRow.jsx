import React from 'react'
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

const AppointmentRow = ({id,PatientName,DoctorName, Date, Time,onDelete }) => {
  return (
    <>
    <div className='hidden sm:grid grid-cols-5 border-b-2 border-b-gray-300  px-2 py-3 rounded-sm text-sm text-center font-medium capitalize items-center'>
        <div className='flex items-center gap-2'>
            <input type="checkbox" />
            <span>{PatientName}</span>
        </div>              
        <span>{DoctorName}</span>
        <span>{Date}</span>
        <span>{Time}</span>
        <div className='actions flex items-center justify-center gap-2'>
            <span><FiEdit className='text-blue-400 text-xl' /></span> 
            <span><FiTrash2 onClick={()=> onDelete(id)} className='text-red-400 text-xl cursor-pointer' /></span>                
        </div>
    </div>

    <div className="sm:hidden bg-white border border-gray-300  rounded-lg p-3 mb-2">
      <div className="font-semibold uppercase">{PatientName}</div>
      <div className="text-sm">Doctor: {DoctorName}</div>
      <div className="text-sm">Date: {Date}</div>
      <div className="text-sm">Time: {Time}</div>

      <div className="flex gap-3 mt-2">
          <span><FiEdit className='text-blue-400 text-xl' /></span>
          
          <span><FiTrash2 className='text-red-400 text-xl  ' /></span>
      </div>
    </div>
    </>
  )
}

export default AppointmentRow
