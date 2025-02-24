import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [captainData, setCaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
     fullName:{
      firstName: firstName,
      lastName: lastName
     },
      email: email,
      password: password
    })

    setFirstName('')
    setLastName('')
    setEmail('')
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
    
              <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                Sign up
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
