import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-sky-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-purple-500/100 duration-500'>
      {props.children}
    </button>
  )
}

export default Button