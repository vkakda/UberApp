import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const UserLogout = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_API_URL}/user/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
        localStorage.removeItem('token')
        navigate('/user-login')
        }
    })

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout