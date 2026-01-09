import React from 'react'

const Button = ({children, variant="primary", ...props}) => {
    const base='group flex items-center gap-2 px-2 py-2 font-medium cursor-pointer';
    const variants = {
      primary: 'bg-(--primary) border border-[#009483]  rounded-lg text-sm shadow transition hover:bg-white hover:border border(--primary) hover:text-(--primary) hover:bg-transparent text-white',

      secondary: ' bg-white border border-(--secondary) rounded-lg text-sm shadow pointer hover:bg-stone-300 hover:text-black'
        
    }
  return (
    <button className ={`${base} ${variants[variant]}`} {...props}>
      
        {children}
    </button>
  )
}

export default Button
