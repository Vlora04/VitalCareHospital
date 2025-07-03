/*import { createContext } from "react";

export const AppContext = createContext() 

const AppContextProvider = (props) => {

  const currency = '€'

    const calculateAge = (dob) => {
        const today = new Date()
        const birtDate = new Date(dob)

        let age = today.getFullYear() - birtDate.getFullYear()
        return age 
    }
   
  const months = ["", "Jan", "Shku", "Mar", "Pri", "Maj", "Qer", "Korr", "Gush", "Shta", "Tet", "Nen", "Dhj"]

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }



    const value = {
    calculateAge,
    slotDateFormat,
    currency

    }

    return (
        <AppContext.Provider value={value}> 
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider*/

import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {

const currencySymbol = '€'
const backendUrl = import.meta.env.VITE_BACKEND_URL
const [doctors, setDoctors] = useState([])
const[token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token'): false)
const[userData, setUserData] = useState(false)


const getDoctorsData = async () => {

    try {

        const {data} = await axios.get(backendUrl + '/api/doctor/list')
        
        if (data.success) {
            setDoctors(data.doctors)
            
        } else {
           toast.error(data.message) 
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}

const loadUserProfileData = async () => {
    try{
        const {data} = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })
        if(data.success){
            setUserData(data.userData)
        } else{
            toast.error(data.message)
        }

    } catch(error){
        console.log(error)
        toast.error(error.message)
    }
}

const value = {
    doctors,getDoctorsData,
    currencySymbol,
    token,setToken,
    backendUrl,
    userData,setUserData,
    loadUserProfileData
}


useEffect(()=>{
    getDoctorsData()

},[])

useEffect(()=>{
    if(token){
        loadUserProfileData()
    }else{
        setUserData(false)
    }
},[token])

return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
)
}
export default AppContextProvider