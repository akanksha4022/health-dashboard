import React, {useEffect} from "react";

import {FiSettings, FiVideo} from 'react-icons/fi';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainLayout from "./components/Mainlayout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Patient from "./pages/Patient";

const App = ()=>{

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
          path:"",
          element:<Dashboard />
        },
        {
          path:"/Dashboard",
          element:<Dashboard />
        },
        {
          path:"/Appointments",
          element:<Appointments />
        },
        {
          path: "/Patient",
          element: <Patient />
        }
      ]
    }
  ])
  return(
    <div className="w-full">
      <RouterProvider router={router} />
    </div>
    

  );
}

export default App

