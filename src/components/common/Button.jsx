import React from 'react'

const Button = ({label, colorClass = 'bg-blue-500', clickHandler, id}) => {
  return (
    <button data-btn-value={id} className={`px-6 py-1.5 rounded-md ${colorClass} text-white text-lg font-bold mt-3 cursor-pointer duration-300 hover:bg-black hover:text-accentBrwn text-nowrap`} onClick={e => clickHandler(e)}>
      {label}
    </button>
  )
}

export default Button