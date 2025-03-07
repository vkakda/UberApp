import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
import { useContext } from "react";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    };

    console.log(newUser);

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201)  {
      const data = response.data;

      setUser(data.user);
      localStorage.setItem("token", data.token);


      navigate("/home");
    }


    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
          className="w-16 mb-10"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl font-medium mb-2">What's your name</h3>
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

          <h3 className="text-xl font-medium mb-2">What's your email</h3>
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
            Create account
          </button>
        </form>
        <p className="text-center">
          Already have an account?
          <Link to="/user-login" className="text-blue-600">
            {" "}
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[8px]">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy policy</span> and{" "}
          <span className="underline">Terms of service</span> apply
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
