import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoctor, setFilterDoctor] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoctor(doctors.filter(doctor => doctor.speciality === speciality))
    }
    else {
      setFilterDoctor(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist. </p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
        <p
  onClick={() => navigate('/doctors/Mjek i përgjithshëm')}
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Mjek i përgjithshëm" ? "bg-indigo-100 text-black" : ""}`}
>
  Mjek i përgjithshëm
</p>
<p
  onClick={() => navigate('/doctors/Gjinekolog')}
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gjinekolog" ? "bg-indigo-100 text-black" : ""}`}
>
  Gjinekolog
</p>
<p
  onClick={() => navigate('/doctors/Dermatolog')}
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatolog" ? "bg-indigo-100 text-black" : ""}`}
>
  Dermatolog
</p>
<p
  onClick={() => navigate('/doctors/Pediatër')}
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatër" ? "bg-indigo-100 text-black" : ""}`}
>
  Pediatër
</p>
<p
  onClick={() => navigate('/doctors/Neurolog')}
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurolog" ? "bg-indigo-100 text-black" : ""}`}
>
  Neurolog
</p>
<p
  onClick={() => navigate('/doctors/Gastroenterolog')}
  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterolog" ? "bg-indigo-100 text-black" : ""}`}
>
  Gastroenterolog
</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoctor.map((item, index) => (
              <div key={item._id} onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-green-500' : 'text-gray-400'}`}>
                    <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-400'} rounded-full`}></p>
                    <p>{item.available ? 'Available' : 'Not Available'}</p>
                  </div>

                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Doctors