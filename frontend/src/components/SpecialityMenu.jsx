import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div
      id='speciality'
      className='flex flex-col items-center gap-4 py-16 text-[#262626] px-4'
    >
      <h1 className='text-3xl font-medium text-center'>Find by Services</h1>
      <p className='sm:w-1/2 w-full text-center text-sm'>
        Take a look at our services
      </p>

      {/* Responsive Grid Layout */}
      <div
        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
        gap-6 w-full max-w-screen-lg pt-5'
      >
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            key={index}
            className='flex flex-col items-center text-sm cursor-pointer 
            hover:translate-y-[-10px] transition-all duration-300'
          >
            <img
              className='w-16 sm:w-20 md:w-24 lg:w-28 mb-2 rounded-full shadow-md'
              src={item.image}
              alt={item.speciality}
            />
            <p className='text-center'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
