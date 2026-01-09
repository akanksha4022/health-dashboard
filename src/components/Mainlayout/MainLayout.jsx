import React from 'react'
import TopBar from '../Topbar/TopBar'
import SideBar from '../Sidebar/SideBar'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <div className='min-h-screen flex overflow-x-hidden'>
     <SideBar /> 
     <div className='flex flex-1 flex-col'>
      <TopBar /> 
        <main className='flex-1 overflow-y-auto overflow-x-hidden'>
          <Outlet />
        </main>    
        
     </div>
      
    </div>
  )
}

export default MainLayout
