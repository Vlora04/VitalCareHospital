import validator from "validator"
import bcrypt from "bcrypt"
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"

// API FOR ADDING DOCTOR
const addDoctor = async (req, res) => {
    try {

        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        // checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Mungojnë të dhënat!" })
        }
        

        // validating email format
        if (!validator.isEmail(email)) {

            return res.json({ success: false, message: "Ju lutem shkruani një email të vlefshëm!" })
        }
        // validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Përdorni një fjalëkalim të fortë me të paktën 8 karaktere!" })
        }

        // hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //uploud image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor = new doctorModel (doctorData)
        await newDoctor.save()

        res.json({success:true,message:"Mjeku u shtua me sukses!"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

}
// API per admin login
const loginAdmin = async (req,res) => {
    try{

        const {email,password} = req.body
        
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
           
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
          
        } else {
            res.json({success:false,message:"Të dhëna të pavlefshme!"})
        }

    } catch (error) {
         console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API me i marr doktorat per dashboardin e adminit
const allDoctors = async (req,res) => {
    try {
        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true,doctors})

    } catch (error) {
         console.log(error)
        res.json({success:false, message:error.message})
    
        
    }
}
// api per te marre te gjithe listen e termineve 

const appointmentsAdmin = async (req,res) => {

    try {
        const  appointments = await appointmentModel.find({})
            res.json({success:true,appointments})
        
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    
        
    }
} 

// Api per te anuluar terminet nga admini
const appointmentCancel = async (req,res) => {
    try {

        const {appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        
       
        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})

        //Lirimi i terminit të mjekut

        const {docId, slotDate, slotTime} = appointmentData

        const doctorData = await doctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await doctorModel.findByIdAndUpdate(docId, {slots_booked})

        res.json({success:true, message:'Termini u anulua!'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}




export { addDoctor,loginAdmin,allDoctors, appointmentsAdmin,appointmentCancel}