import React, { useEffect, useState } from 'react'
import AppointmentForm from './AppointmentForm'
import AppointmentRow from './AppointmentRow'
import Heading from '../ui/Heading'
import Button from '../ui/Button'
import { IoIosArrowDown } from "react-icons/io";
import AppointmentModal from './AppointmentModal';
import { setItem, getItem } from '../../utils/localstorage';


const AppointmentList = () => {
  //how to store object by using form in this array
    const [appointments, setAppointments] = useState(()=>{
      const savedData = getItem('HEALTH_DASHBOARD_APPOINTMENT');
      return savedData ?? [];    
    }
  );
    const [isModalOpen, setIsModalOpen] = useState(false);    
    

    const handleAppointment=(addnewAppointment)=>{
      setAppointments(prev=>[...prev, addnewAppointment])
    }

  

    useEffect(()=>{
        setItem('HEALTH_DASHBOARD_APPOINTMENT', appointments)
    },[appointments]);

    const totalAppointments = appointments.length;
    
  return (
    
    <div className='appointment sm:col-span-8 sm:row-span-2 bg-white border border-stone-200 rounded-xl p-5 shadow-sm flex flex-col h-full '>
      

          <Heading title="Booked Appointment" 
                   actions={[
                              <Button variant="secondary">
                                Today
                                <IoIosArrowDown className="text-sm" />
                              </Button>,
                              <Button variant="primary" onClick={()=>setIsModalOpen(true)}>
                                Add New
                                <IoIosArrowDown className="text-sm" />
                              </Button>
          ]} />
          {
            isModalOpen && (
              <AppointmentModal onClose={()=>setIsModalOpen(false)}>
                <AppointmentForm 
                  addAppointment={handleAppointment} 
                  onClose={()=>setIsModalOpen(false)} 
                />
              </AppointmentModal>
            )
          }
          <div className='appointmentContext w-full flex items-center justify-between text-sm text-stone-500 mb-5'>
            <span>Total appointment today: {totalAppointments}</span>
            <span>Pending : 12</span>
            <span>completed: 1</span>
            
          </div>

          <div className='listContainer h-full flex-1 overflow-y-auto sm:overflow-y-scroll scroll-smooth overflow-x-hidden max-h-75 sm:max-h-none'>
            <div className='listheader hidden sm:grid grid-cols-5  px-2 py-3 bg-stone-50 rounded-sm text-sm text-stone-600 text-center font-medium capitalize'>
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
          {appointments.length>0 ? 
            appointments.map((item, index)=>(
              <AppointmentRow 
              key={index} 
              PatientName={item.patient}
              DoctorName={item.doctor} 
              Date={item.date}  
              Time={item.time}
              />
            )

            )
          
          : <p className='text-stone-400 relative top-17 left-70'>No appointments! Enjoy!😊</p> }
          {/* <div>
            <AppointmentRow PatientName="Julie Brown" DoctorName="Dr. James Bond" Date="22/2/2012" Time="21:29" />
            <AppointmentRow PatientName="Julie Brown" DoctorName="Dr. James Bond" Date="22/2/2012" Time="21:29" />
            <AppointmentRow PatientName="Julie Brown" DoctorName="Dr. James Bond" Date="22/2/2012" Time="21:29" />
            <AppointmentRow PatientName="Julie Brown" DoctorName="Dr. James Bond" Date="22/2/2012" Time="21:29" />
            <AppointmentRow PatientName="Julie Brown" DoctorName="Dr. James Bond" Date="22/2/2012" Time="21:29" />
            <AppointmentRow PatientName="Julie Brown" DoctorName="Dr. James Bond" Date="22/2/2012" Time="21:29" />
          </div>               */}
          
          
              

          </div>

        
        </div>

        
  )
}

export default AppointmentList
