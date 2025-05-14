import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {


const [docImg,setDocImg] = useState(false)
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [experience,setExperience] = useState('1-vjeçare')
const [fees,setFees] = useState('')
const [about,setAbout] = useState('')
const [speciality,setSpeciality] = useState('Mjek i përgjithshëm')
const [degree,setDegree] = useState('')
const [address1,setAddress1] = useState('')
const [address2,setAddress2] = useState('')

const { backendUrl, aToken} = useContext(AdminContext)



const onSubmitHandler = async (event) => {
  event.preventDefault()

  try {
    
    if(!docImg) {
      return toast.error('Fotografia nuk është përzgjedhur')
    }
    const formData = new FormData()

    formData.append('image',docImg)
    formData.append('name',name)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('experience',experience)
    formData.append('fees',Number(fees))
    formData.append('about',about)
    formData.append('speciality',speciality)
    formData.append('degree',degree)
    formData.append('address',JSON.stringify({line1:address1,line2:address2}))
  
    // console log formdata
    formData.forEach((value,key)=>{
         console.log(`${key} : ${value}`);
    })

    const {data} = await axios.post(backendUrl + '/api/admin/add-doctor',formData, {headers:{ aToken }})
    if (data.success) {
      toast.success(data.message)
      setDocImg(false)
      setName('')
      setPassword('')
      setEmail('')
      setAddress1('')
      setAddress2('')
      setDegree('')
      setAbout('')
      setFees('')
    } else {
      toast.error(data.message)
    }
  } catch (error) {
    toast.error(error.message)
    console.log(error)
    
  }
}




return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>

      <p className='mb-3 text-lg font-medium'>Shto Mjek</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer'    src={docImg ? URL.createObjectURL(docImg)  :   assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p>Ngarko fotografinë <br /> e mjekut</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>


            <div className='flex-1 flex flex-col gap-1'>
              <p>Emri Mjekut </p>
              <input onChange={(e)=> setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Emri' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Email-i Mjekut</p>
              <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p >Fjalëkalimi i mjekut</p>
              <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Fjalëkalimi' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Përvoja e punës</p>
              <select onChange={(e)=> setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2'  >
                <option value="1-vjeçare">1-vjeçare</option>
                <option value="2-vjeçare">2-vjeçare</option>
                <option value="3-vjeçare">3-vjeçare</option>
                <option value="4-vjeçare">4-vjeçare</option>
                <option value="5-vjeçare">5-vjeçare</option>
                <option value="6-vjeçare">6-vjeçare</option>
                <option value="7-vjeçare">7-vjeçare</option>
                <option value="8-vjeçare">8-vjeçare</option>
                <option value="9-vjeçare">9-vjeçare</option>
                <option value="10-vjeçare">10-vjeçare</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Pagesa</p>
              <input onChange={(e)=> setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='Shkruaj pagesën' required />
            </div>

          </div>

          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Specializimi</p>
              <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2' >
                <option value="Mjek i përgjithshëm">Mjek i përgjithshëm</option>
                <option value="Gjinekolog">Gjinekolog</option>
                <option value="Dermatolog">Dermatolog</option>
                <option value="Pediatër">Pediatër</option>
                <option value="Neurolog">Neurolog</option>
                <option value="Gastroenterolog">Gastroenterolog</option>
              </select>
            </div>


            <div className='flex-1 flex flex-col gap-1'>
              <p>Edukimi</p>
              <input onChange={(e)=> setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='Shkolla, Universitete' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Adresa</p>
              <input onChange={(e)=> setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='Adresa kryesore' required />
              <input onChange={(e)=> setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='Adresa shtesë' required />
            </div>

          </div>

        </div>

        <div>
          <p className='mt-4 mb-2'>Rreth Mjekut</p>
          <textarea onChange={(e)=> setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded'   placeholder="shkruaj për mjekun" rows={5} required></textarea>
        </div>

        <button type='submit' className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Shto Mjekun</button>

      </div>
    </form>


  )
}

export default AddDoctor