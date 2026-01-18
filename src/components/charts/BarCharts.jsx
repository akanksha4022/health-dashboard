import React, { useEffect, useState } from 'react'
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip, 
    Legend
} from "recharts";
import axios from 'axios';


const BarCharts = () => {
  const [patients, setPatients] = useState([]);
  
  function randomDate(start, end){
    return start.getTime() + Math.random() * (end.getTime() - start.getTime());
  }
  useEffect(()=>{
    axios.get("https://dummyjson.com/users?limit=200")
    .then((response)=>{
      const data = response.data.users.map((user)=>({
        ...user,
        createdAt: randomDate(new Date(2023, 0,1), new Date())
      }))
      setPatients(data)
    
    });
  },[])

  const monthlyPatient = Array.from({length:12}, (_,i)=>({
    month: new Date(0,i).toLocaleString("default", {month:'short'}),
    patient: 0

  }));
  patients.forEach(p=>{
    const monthIndex =new Date(p.createdAt).getMonth();
    monthlyPatient[monthIndex].patient++;
  });
  console.log(monthlyPatient);

  return (   
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={monthlyPatient}
          margin={{right:10,left:-20,top:10 , bottom:0  }}
        >

          <XAxis
            dataKey="month"
            tick={{ fill: "#64748b", fontSize: 12 }}
            axisLine={{stroke: "#e2e8f0"}}
            tickLine={false}
          />

          <YAxis
            domain={[0, 100]}
            tick={{ fill: "#64748b", fontSize: 12 }}
            axisLine={{stroke: "#e2e8f0"}}
            tickLine={false}
          />

          <Tooltip
            cursor={{ fill: "#f1f5f9" }}
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e5e7eb"
            }}
          />

          <Bar
            dataKey="patient"
            radius={[6, 6, 0, 0]}
            fill="#22c55e"
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarCharts


