import React from 'react'
import heroImage from './ui/image/heroImage.jpg'
const HeroSection = () => {
  return (
    <div className='text-center pt-8 px-6'>
        <h3 className='mb-[-10px] text-xs'> <span className='font-poppins'>Unforgettable stays during </span> <span className='text-[#E07100] font-preahvihear font-regular'>महाकुंभ</span></h3>
        <h1 className='text-[14vw] mb-0 font-semibold font-poppins'>Vinayak Inn</h1>
        <img src={heroImage} className='h-44 w-full mt-2 rounded-lg' alt="MahaKumbh Image" />
    </div>
  )
}

export default HeroSection