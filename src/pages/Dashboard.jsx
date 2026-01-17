import React, { useEffect, useState } from 'react'
import { FiShare } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Button from '../components/ui/Button';
import Card from '../components/ui/Card'

import BarCharts from '../components/charts/BarCharts'
import { PiStethoscope } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import { PiLampPendantLight } from "react-icons/pi";
import { PiCurrencyDollarSimpleLight } from "react-icons/pi";

import Heading from '../components/ui/Heading';
import AppointmentRow from '../components/Appointments/AppointmentRow';
import AppointmentList from '../components/Appointments/AppointmentList';
import AppointmentForm from '../components/Appointments/AppointmentForm';




const Dashboard = () => { 

  return (
    // Dashboard
    <div className='flex flex-col  h-full'>
      {/* //dashboardTop */}
     <div className='dashboardTop flex justify-between items-center p-4 '>
      <h1 className='font-bold text-xl sm:text-2xl'>Dashboard</h1>
      <div className='buttons flex items-center gap-3'>
        <Button variant='secondary'>
          <span className='transition'>Weekly</span>
          <IoIosArrowDown className='text-md text-(--text-secondary) transition' />
        </Button>
        <Button variant='primary'>
          <FiShare className='text-lg text-white group-hover:text-(--primary) transition' />
          <span className='text-white group-hover:text-(--primary) transition'>Export</span>          
        </Button>
      </div>
     </div>

      {/* Charts */}
     <div className='content bg-transparent p-4 grid grid-cols-2 sm:grid-cols-12 sm:grid-rows-2 gap-4'>
        <div className="col-span-full sm:col-span-8 sm:row-span-2 bg-white border border-stone-200 rounded-xl p-5 shadow-sm">
          {/* BarChartHeading */}
          <Heading title="Number of Patients" 
                   subtitle="Monthly overview"
                   actions={[<Button variant="secondary">
                              Monthly
                              <IoIosArrowDown className="text-sm" />
                            </Button>
                          ]} />      

          {/* BarChart */}
          <BarCharts />
        </div>

        <Card title="Appointment" number="450" barValue="50" percent={40} trend="up" color="#417DF6" icon={<PiStethoscope />} />
        <Card title="New Patients" number="50" barValue="20" percent={50} trend="down" color="#FB7E00" icon={<SlPeople />} />
        <Card title="Operations" number="90" barValue="20" percent={90} trend="down" color="#FF5036" icon={<PiLampPendantLight />} />
        <Card title="money" number="$12.570" barValue="20" percent={20} trend="up" color="#008171" icon={<PiCurrencyDollarSimpleLight />} />

      
        
     </div>
      <div className='content h-100  bg-transparent p-4 grid grid-cols-1 sm:grid-cols-12 sm:grid-rows-2 gap-4'>
        
        <AppointmentList />
        

        <div className='sm:col-span-4 sm:row-span-2 bg-white border border-stone-200 rounded-xl p-5 shadow-sm'>

        </div>
     </div>

    
    </div>

    
  )
}

export default Dashboard
