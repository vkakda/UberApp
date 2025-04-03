import React from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useContext, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


const CaptainProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    console.log(token)

    useEffect(() => {
        if (!token) {
          navigate('/captain-login')
        } else {
          axios
            .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              console.log("Profile data:", response.data) // check what you get back
              if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
              }
            })
            .catch((err) => {
              console.error(err)
              localStorage.removeItem('token')
              navigate('/captain-login')
            })
        }
    }, [token, navigate, setCaptain])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }


  return (
    <>
    {children}
    </>
  )
}

export default CaptainProtectWrapper