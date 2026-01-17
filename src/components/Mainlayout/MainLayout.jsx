import React, { useState } from 'react'
import TopBar from '../Topbar/TopBar'
import SideBar from '../Sidebar/SideBar'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  
  return (
    <div className='min-h-screen flex overflow-x-hidden'>
     <SideBar open={sidebarOpen} setOpen = {setSidebarOpen} /> 
     <div className='flex flex-1 flex-col'>
      <TopBar setOpen={setSidebarOpen} /> 
        <main className='flex-1 overflow-y-auto overflow-x-hidden'>
          <Outlet />
        </main>    
        
     </div>
      
    </div>
  )
}

export default MainLayout
