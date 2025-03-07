import React from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useContext, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    console.log(token)

    useEffect(() =>{
        if (!token) {
            navigate('/user-login')
        }
    },[token])


  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper