import React from 'react'
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

const AppointmentRow = ({PatientName,DoctorName, Date, Time }) => {
  return (
    <div className='grid grid-cols-5 border-b-2 border-b-gray-300  px-2 py-3 rounded-sm text-sm text-center font-medium capitalize items-center'>
        <div className='flex items-center gap-2'>
            <input type="checkbox" />
            <span>{PatientName}</span>
        </div>              
        <span>{DoctorName}</span>
        <span>{Date}</span>
        <span>{Time}</span>
        <div className='actions flex items-center justify-center gap-2'>
            <span><FiEdit className='text-blue-400 text-xl' /></span> 
            <span><FiTrash2 className='text-red-400 text-xl' /></span>                
        </div>
    </div>
  )
}

export default AppointmentRow
