import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

      {/* Left Side */}
      <div className='flex-1 flex flex-col justify-center items-center text-center md:items-start md:text-left py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
          <p>Book Appointment</p>
          <p className='mt-4'>With Us</p>
        </div>
        <button
          onClick={() => { navigate('/login'); scrollTo(0, 0) }}
          className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'
        >
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className='flex-1 flex justify-center items-center'>
        <img
          className='w-[60%] sm:w-[50%] md:w-[80%] lg:w-[370px] object-contain'
          src={assets.account}
          alt="appointment_img"
        />
      </div>
    </div>
  )
}

export default Banner
