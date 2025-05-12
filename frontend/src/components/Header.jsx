import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

      {/* ------- Ana e Majtë ------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 text-white'>
        <p className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
          Rezervo Terminin <br /> Me Mjekë të Besuar
        </p>

        <div className='flex items-center gap-4 text-sm font-light'>
          <img className='w-20 md:w-24' src={assets.group_profiles} alt="Profilet e Grupit" />
          <p>
            Thjesht shfleto listën tonë të gjerë të mjekëve të besuar,
            <br className='hidden md:block' />
            dhe cakto terminin pa asnjë problem.
          </p>
        </div>

        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
          Rezervo termin <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ------- Ana e Djathtë ------- */}
      <div className='md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end'>
        <img
          className='w-[90%] md:w-full max-w-md lg:max-w-xl object-contain'
          src={assets.header_img}
          alt="Mjekët në Header"
        />
      </div>
    </div>
  )
}

export default Header
