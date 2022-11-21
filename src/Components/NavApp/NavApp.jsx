import React, { useState } from 'react'
import Logo from '../../assets/Img/logo.png'
import Button from '../Button';

export const NavApp = () => {
  let Links =[
    {name:"HOME",link:"/"},
    {name:"SERVICE",link:"/"},
    {name:"ABOUT",link:"/"},
    {name:"BLOG'S",link:"/"},
    {name:"CONTACT",link:"/"},
  ];
  let [open,setOpen]=useState(false);
return (
  <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500 py-4 md:px-10 px-5'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
    <span>
     <img src={Logo} width={120}/>
   </span>
   </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
            <a href={link.link} className='text-gray-800 hover:text-white duration-500'>{link.name}</a>
          </li>
        ))
      }
      <Button>
        INICIAR SESIÓN
      </Button>
    </ul>
    </div>
  </div>
  )
}

export default NavApp;