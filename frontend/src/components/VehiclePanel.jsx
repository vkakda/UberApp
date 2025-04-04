import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
         <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={()=>{
          props.setVehiclePanel(false)
        }}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

          <div onClick={()=>{
            props.setConfirmRidePanel(true)
          }} className=' flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img 
            className='h-10'
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png" alt="uber-car-pic" />
            <div className='-ml-2 w-1/2'>
              <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹193.30</h2>
          </div>

          <div onClick={()=>{
            props.setConfirmRidePanel(true)
          }} className=' flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img 
            className='h-10'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s" alt="uber-car-pic" />
            <div className='-ml-2 w-1/2'>
              <h4 className='font-medium text-base'>Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable motorcycle rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹65.17</h2>
          </div>

          <div className=' flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img 
            className='h-10'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s" alt="uber-car-pic" />
            <div className='-ml-2 w-1/2'>
              <h4 className='font-medium text-base'>UberAuto <span><i className='ri-user-3-fill'></i>3</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-gray-600 text-xs'>Affordable Auto rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹109.62</h2>
          </div>
    </div>
  )
}

export default VehiclePanel