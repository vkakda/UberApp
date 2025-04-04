import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to="/home" className="fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-home-line"></i>
        </Link>

      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber-map"
        />
      </div>

      <div className="h-1/2 p-4">
      <div className='flex items-center justify-between'>
    <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png"
        />    
        <div className='text-right'>
            <h2 className='text-lg font-medium'>Vishal</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP12AB1234</h4>
            <p className='test-sm text-gray-600'>Maruti Suzuki Wagon-R</p>
        </div>
    </div>

    <div className="flex gap-2 justify-between items-center flex-col">
    <div className="w-full mt-5">
      
      
      <div className="flex items-center gap-5 p-3 border-b-2">
        <i className=" text-lg ri-map-pin-2-fill"></i>
        <div>
          <h3 className="text-lg font-medium">562/11-A</h3>
          <p className="text-sm -mt-1 text-gray-600">Kochipukur, Burdwan</p>
        </div>
      </div>
              
      <div className="flex items-center gap-5 p-3">
        <i className=" text-lg ri-currency-line"></i>
        <div>
          <h3 className="text-lg font-medium">₹109.30</h3>
          <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
        </div>        
      </div>
    </div>
    </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
      </div>

    </div>
  );
};

export default Riding;
