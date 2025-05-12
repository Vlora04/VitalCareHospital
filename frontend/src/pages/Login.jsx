import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Krijo Llogarinë" : "Hyr në Llogari"}</p>
        <p>Ju lutem {state === 'Sign Up' ? "regjistrohuni" : "hyni"} për të rezervuar një takim</p>
        {
          state === "Sign Up" && <div className='w-full'>
            <p>Emri dhe Mbiemri</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="text" onChange={(e) => setName(e.target.name)} value={name} required />
          </div>
        }

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="email" onChange={(e) => setEmail(e.target.email)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Fjalëkalimi</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="password" onChange={(e) => setPassword(e.target.password)} value={password} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Krijo Llogarinë" : "Hyr në Llogari"}</button>
        {
          state === "Sign Up"
            ? <p>
              Keni një llogari? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Hyni këtu</span></p>
            : <p>Doni të krijoni një llogari të re? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Klikoni këtu</span></p>
        }
      </div>
    </form>
  )
}

export default Login
