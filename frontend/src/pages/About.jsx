import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Rreth <span className='text-gray-700 font-medium'>Nesh</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Mirë se vini në Vital Care, partneri juaj i besueshëm për menaxhimin e nevojave tuaja shëndetësore në mënyrë të përshtatshme dhe efikase. Tek Prescripto, ne kuptojmë sfidat me të cilat përballen individët kur bëhet fjalë për caktimin e termineve mjekësore dhe menaxhimin e të dhënave shëndetësore.</p>
          <p>Vital Care është e përkushtuar ndaj përsosmërisë në teknologjinë shëndetësore, dhe vazhdimisht punojmë për të përmirësuar platformën tonë duke integruar risitë më të fundit për të ofruar përvojë më të mirë për përdoruesit dhe shërbim të lartë. Qoftë duke caktuar një takim apo duke menaxhuar kujdesin tuaj të vazhdueshëm, Prescripto është këtu për t'ju mbështetur në çdo hap.</p>
          <b className='text-gray-800'>Vizioni Ynë</b>
          <p>Vizionin ynë në Vital Care është të krijojmë një përvojë shëndetësore të lehtë dhe të qasshme për secilin përdorues. Synojmë të lidhim prindërit dhe ofruesit e kujdesit shëndetësor, duke e bërë më të lehtë për ju të merrni kujdesin që ju nevojitet, kur ju nevojitet.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Pse të <span className='text-gray-700 font-semibold'>na zgjidhni neve</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efikasiteti:</b>
          <p>Orari i termineve të thjeshtuar që i përshtatet stilit tuaj të ngarkuar të jetesës.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Komoditeti:</b>
          <p>Qasje në një rrjet të profesionistëve të besuar shëndetësor në zonën tuaj.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Përshtatje personale:</b>
          <p>Rekomandime dhe kujtesa të personalizuara për të qëndruar gjithmonë në hap me shëndetin tuaj.</p>
        </div>
      </div>
    </div>
  )
}

export default About
