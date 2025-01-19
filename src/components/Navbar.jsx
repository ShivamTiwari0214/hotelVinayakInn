import React from 'react'
import HotelIcon from '../assets/HotelIcon.svg'
import HamBurger from './ui/Burger/HamBurger'
import navCallNow from './ui/icons/navCallNow.svg'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6 '>
        <div className='flex items-center w-[50%] gap-2'>
        <img src={HotelIcon} alt="Logo" className='h-10'/>
        <h1 className=' font-poppins font-medium w-auto'>Vinayak Inn</h1>
        </div>

        <div>
          <img src={navCallNow} onClick={() => (window.location.href = "tel:+918182876012")} alt="" />
        </div>
    </div>
  )
}

export default Navbar