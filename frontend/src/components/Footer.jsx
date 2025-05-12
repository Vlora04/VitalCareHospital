import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/*-------Seksioni i Majtë-------*/}
        <div>
          <img className="w-[40px] h-[40px] " src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Spitali Vital Care është i përkushtuar të ofrojë shërbime cilësore shëndetësore me dhembshuri dhe përkushtim. Ekipi ynë i profesionistëve me përvojë përpiqet të sigurojë mirëqenien e çdo pacienti përmes kujdesit dhe vëmendjes së personalizuar. Faleminderit që na besoni shëndetin tuaj.
          </p>
        </div>

        {/*-------Seksioni Qendror-------*/}
        <div>
          <p className='text-xl font-medium mb-5'>KOMPANIA</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Ballina</li>
            <li>Rreth nesh</li>
            <li>Dërgesa</li>
            <li>Politika e privatësisë</li>
          </ul>
        </div>

        {/*-------Seksioni i Djathtë-------*/}
        <div>
          <p className='text-xl font-medium mb-5'>KONTAKTO</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+383 49 788 284</li>
            <li>vitalcare@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @Vital Care - Të gjitha të drejtat e rezervuara.</p>
      </div>
    </div>
  )
}

export default Footer;
