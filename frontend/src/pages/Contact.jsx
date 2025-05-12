import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>NA <span className='text-gray-700 font-semibold'>KONTAKTONI</span> </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>

        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>ZYRA JONË</p>
          <p className='text-gray-500'>Prishtinë, Kosova</p>
          <p className='text-gray-500'>Tel: +383 49 788 284 <br /> Email: vitalcare@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Karriera në Vital Care</p>
          <p className='text-gray-500'>Mësoni më shumë për pozitat e hapura.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Shiko Punë
          </button>
        </div>
        
      </div>

    </div>
  )
}

export default Contact
