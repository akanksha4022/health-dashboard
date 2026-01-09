import React, { useEffect, useState } from 'react'
import AppointmentRow from './AppointmentRow'
import Heading from '../ui/Heading'
import Button from '../ui/Button'
import { IoIosArrowDown } from "react-icons/io";


const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    const [form, setForm] = useState({
        patient:"",
        doctor:"",
        date:"",
        time:""
    })
    //how to store object by using form in this array

    useEffect(()=>{
        const data = window.localStorage.getItem('HEALTH_DASHBOARD_APPOINTMENT');
        if(data)
            {
                setAppointments(JSON.parse(data));
            } 
    },[])

    useEffect(()=>{
        window.localStorage.setItem('HEALTH_DASHBOARD_APPOINTMENT', JSON.stringify(appointments))
    },[appointments])
    
  return (
    <div className='appointment sm:col-span-8 sm:row-span-2 bg-white border border-stone-200 rounded-xl p-5 shadow-sm flex flex-col h-full'>
          <Heading title="Booked Appointment" 
                   actions={[
                              <Button variant="secondary">
                                Today
                                <IoIosArrowDown className="text-sm" />
                              </Button>,
                              <Button variant="primary">
                                Add New
                                <IoIosArrowDown className="text-sm" />
                              </Button>
          ]} />

          <div className='appointmentContext w-full flex items-center justify-between text-sm text-stone-500 mb-5'>
            <span>Total appointment today: 13</span>
            <span>Pending : 12</span>
            <span>completed: 1</span>
            <button onClick={()=>setAppointments(false)}>load</button>
          </div>
          <div className='listContainer h-full flex-1 overflow-y-scroll '>
            <div className='listheader grid grid-cols-5  px-2 py-3 bg-stone-50 rounded-sm text-sm text-stone-600 text-center font-medium capitalize'>
              <div className='flex items-center gap-2'>
                <input type="checkbox" />
                <span>patient name</span>
              </div>              
              <span>Doctor name</span>
              <span>date</span>
              <span>time</span>
              <div className='actions'>
                actions
              </div>
            </div>
          {appointments ?
          <div>
            <AppointmentRow PatientName="Julie Brown" DoctorName="Dr. James Bond" Date="22/2/2012" Time="21:29" />
            <AppointmentRow PatientName="Julie Brown" DoctorName="Dr. James Bond" Date="22/2/2012" Time="21:29" />
            <AppointmentRow PatientName="Julie Brown" DoctorName="Dr. James Bond" Date="22/2/2012" Time="21:29" />
            <AppointmentRow PatientName="Julie Brown" DoctorName="Dr. James Bond" Date="22/2/2012" Time="21:29" />
            <AppointmentRow PatientName="Julie Brown" DoctorName="Dr. James Bond" Date="22/2/2012" Time="21:29" />
            <AppointmentRow PatientName="Julie Brown" DoctorName="Dr. James Bond" Date="22/2/2012" Time="21:29" />
          </div>              
          
          : <p>Nothing today 😈</p>}
              

          </div>

        </div>
  )
}

export default AppointmentList
