import React from 'react'
import { useState, useRef } from 'react';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)


  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
const [confirmRidePanel, setConfirmRidePanel] = useState(false)
const [vehicleFound, setVehicleFound ] = useState(false)
const [waitingForDriver, setWaitingForDriver ] = useState(false)



    const submitHandler = (e) => {
    e.preventDefault();
    }

    useGSAP(function() {
      if(panelOpen){
        gsap.to(panelRef.current, {
          height:'70%',
          padding:24
          // opacity:1
        })
        gsap.to(panelCloseRef.current, {
          opacity:1
        })
      } else{
        gsap.to(panelRef.current, {
          height:'0%',
          padding:0
          // opacity:0
        })
        gsap.to(panelCloseRef.current, {
          opacity:0
        })
      }

    },[panelOpen])

    useGSAP(function(){
      if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(0)'
      })
    }else {
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
    },[vehiclePanel])

    useGSAP(function() {
      if(panelOpen){
        gsap.to(panelRef.current, {
          height:'70%',
          padding:24
          // opacity:1
        })
        gsap.to(panelCloseRef.current, {
          opacity:1
        })
      } else{
        gsap.to(panelRef.current, {
          height:'0%',
          padding:0
          // opacity:0
        })
        gsap.to(panelCloseRef.current, {
          opacity:0
        })
      }

    },[panelOpen])

    useGSAP(function(){
      if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(0)'
      })
    }else {
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
    },[confirmRidePanel])

    useGSAP(function(){
      if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(0)'
      })
    }else {
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
    },[vehicleFound])

    useGSAP(function(){
      if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform: 'translateY(0)'
      })
    }else {
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
    },[waitingForDriver])


  return (
    <div className='relative h-screen overflow-hidden'>
      {/* above screen of the window */}
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uberlogo" />

      {/* Map here */}
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt='uber-map' />
      </div>


{/* below section for trip book */}
      <div className=' flex flex-col justify-end h-screen top-0 absolute w-full'>
        <div className='h-[30%] relative p-5 bg-white'>

          <h5 
          ref={panelCloseRef}
          onClick={() => {
            setPanelOpen(false)
          }}
          className='absolute opacity-0 top-6 right-6 text-2xl'>
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>

        <form onSubmit={(e) => {
          submitHandler(e)
        }}
        >
         
          <div className="line absolute h-12 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>

          <input 
          onClick={() =>{
            setPanelOpen(true)
          }}
          value={pickup}
          onChange={(e) => {
            setPickup(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' 
          type="text" 
          placeholder='Add a pick-up location' 
          />

          <input 
          onClick={() =>{
            setPanelOpen(true)
          }}
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' 
          type="text" 
          placeholder='Enter your destination' />

        </form>
        </div>


        {/* Location search suggestion panel */}
        <div 
        ref={panelRef}
        className='h-0 bg-white '>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />

        </div>

      </div>

      {/* vehicle selection opening */}
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white'>
       <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>

          </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
          </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
          </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0  px-3 py-6 pt-12 bg-white'>
        <WaitingForDriver waitingForDriver={waitingForDriver}/>
          </div>



    </div>
  )
}

export default Home;