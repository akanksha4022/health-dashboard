import React from 'react'

const Heading = ({title, subtitle, actions=[]}) => {
  return (

    <div className="flex justify-between items-center mb-4">
        <div>
            <h2 className='text-lg font-["Gilroy-semibold"] text-gray-800'>
            {title}
            </h2>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p> }
            
        </div>
        <div className='flex gap-3'>
            {actions.map((action, index)=>(            
                <div key={index}>{action}</div>
            ))} 
                
        </div>
               
    </div>
  )
}

export default Heading
