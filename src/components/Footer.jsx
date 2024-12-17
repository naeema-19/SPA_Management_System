import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='justify-evenly text-center md:mx-10'> 
      <div className='flex flex-col sm:grid gap-14 my-10 mt-40 text-sm'> 

        <div className='justify-evenly'>
          <center><img className='mb-5 w-40' src={assets.logoo} alt="logo" /></center>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+968 12121212</li>
            <li>javispa@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ JA VIP Beauty and SPA - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer