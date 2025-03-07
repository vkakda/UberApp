import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {

  const navigate = useNavigate()

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const [vehicleColor, setVehicleColor] = useState('')
const [vehiclePlate, setVehiclePlate] = useState('')
const [vehicleCapacity, setVehicleCapacity] = useState('')
const [vehicleType, setVehicleType] = useState('')

const {captain, setCaptain} = useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
     fullname:{
      firstname: firstName,
      lastname: lastName
     },
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
    if (response.status === 201) {
      const data = response.data  
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
              alt="Uber Logo"
              className="w-16 mb-10"
            />
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <h3 className="text-xl font-medium mb-2">What's our Captain's name</h3>
              <div className="flex gap-4 mb-6">
                <input
                  required
                  className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-xl placeholder:text-base"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
    
                <input
                  className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-xl placeholder:text-base"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
    
              <h3 className="text-xl font-medium mb-2">What's our Captain's email</h3>
              <input
                required
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-xl placeholder:text-base"
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

<h3 className="text-xl font-medium mb-2">Enter password</h3>
    
    <input
      className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-xl placeholder:text-base"
      required
      type="password"
      placeholder="password"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
      }}
    />

              <h3 className="text-xl font-medium mb-2">Vehicle Details</h3>
              <div className="flex gap-4 mb-6">
              <input
                required
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-1/2 text-xl placeholder:text-base"
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />

              <input
                required
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-1/2 text-xl placeholder:text-base"
                type="text"
                placeholder="Vehicle Plate"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
              </div>

              <div className="flex gap-4 mb-6">
              <input
                required
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-1/2 text-xl placeholder:text-base"
                type="number"
                placeholder="Vehicle Capacity"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              />

              <select
                required
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-1/2 text-xl"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto/Bike</option>
              </select>
              </div>
    
              
    
              <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                Create Captain Account
              </button>
            </form>
            <p className="text-center">
              Already have an account? 
              <Link to="/captain-login" className="text-blue-600"> Login here
              </Link>
            </p>
          </div>
          <div>
            <p className="text-[8px]">
            This site is protected by reCAPTCHA and the <span className="underline">Google Privacy policy</span> and <span className="underline">Terms of service</span> apply
            </p>
          </div>
        </div>
  )
};

export default CaptainSignup;
