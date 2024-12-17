import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

      {/* Header Left */}
      <div className='md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] text-center md:text-left'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
          Book Appointment <br /> With Us
        </p>

        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt="group_profiles" />
          <p>Simply browse through our extensive list of services, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm hover:scale-105 transition-all duration-300'>
          Book Appointment <img src={assets.arrow_icon} className='w-3' alt="arrow_icon" />
        </a>
      </div>

      {/* Header Right */}
      <div className='md:w-1/2 flex justify-center items-center'>
        <img className='w-[80%] sm:w-[80%] md:w-[80%] h-auto rounded-lg' src={assets.heroo} alt="header_img" />
      </div>
    </div>
  )
}

export default Header
