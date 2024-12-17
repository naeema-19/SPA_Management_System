import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='justify-evenly text-center md:mx-10'>
      <div className='flex flex-col sm:grid gap-14 my-10 mt-40 text-sm'>
      <hr />
        {/* Logo & Contact Section */}
        <div className='justify-evenly'>
          <center>
            <img className='mb-5 w-40' src={assets.logoo} alt="logo" />
          </center>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+968 12121212</li>
            <li>javispa@gmail.com</li>
          </ul>
        </div>

        {/* Location Map Section */}
        <div>
          <p className='text-xl font-medium mb-5'>OUR LOCATION</p>
          <div className='rounded-lg overflow-hidden'>
            <iframe
              title="location-map"
              className='w-full h-64 sm:h-80 rounded-lg'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.5403447781014!2d58.49948757511101!3d23.62081247875906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f88b9915b5f3%3A0x320c4c679a120a5d!2sAgecare%20Aesthetic%20and%20Hair%20Clinic!5e0!3m2!1sen!2som!4v1734448065688!5m2!1sen!2som"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2024 @ JA VIP Beauty and SPA - All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
