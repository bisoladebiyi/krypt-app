import React from 'react'

const Button = ({ children, className, outline, onClick, ...props}) => {
  return (
    <button {...props} onClick={onClick} className={` ${outline ? "bg-transparent border border-slate-500 text-white hover:bg-blue-500" : "bg-blue-500 hover:bg-blue-600"} rounded-2xl px-7 py-2 mt-3 text-sm capitalize transition-colors ${className}`}>{children}</button>
  )
}

export default Button