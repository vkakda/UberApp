import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
         <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <img className='h-10 w-10 rounded-full object-cover' src="https://st2.depositphotos.com/3400509/7601/v/950/depositphotos_76011443-stock-illustration-cartoon-male-avatar.jpg" alt="" />
          <h4 className='text-lg font-medium'>Vishal Kaushik</h4>
        </div>
        <div>
          <h4 className='text-lg font-semibold'>₹295.60</h4>
          <p className='text-sm text-gray-600'>Earned</p>
        </div>
      </div>

      <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-4 items-start'>
        <div className='text-center'>
          <i className='text-3xl mb-2 font-thin ri-timer-2-line' />
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
        </div>

        <div className='text-center'>
          <i className='text-3xl mb-2 font-thin ri-speed-up-line' />
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
        </div>

        <div className='text-center'>
          <i className='text-3xl mb-2 font-thin ri-booklet-line' />
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
        </div>

      </div>
    </div>
  )
}

export default CaptainDetails