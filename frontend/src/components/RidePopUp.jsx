import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
         props.setRidePopupPanel(false)
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride available</h3>

      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg bg-yellow-400 mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-10 object-cover rounded-full"
            src="https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="
            alt="customer-logo"
          />
          <h2 className="text-lg font-medium">Ally Yung</h2>
        </div>
        <h5 className="text-lg font-semibold">2.4 KM</h5>
      </div>

      <div className="flex gap-2 justify-between items-center flex-col">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kochipukur, Burdwan</p>
            </div>
          </div>

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

        <div className="flex mt-5 w-full items-center justify-between">
        <button
          onClick={() => {
            props.setRidePopupPanel(false)
          }}
          className=" mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg"
        >
          Ignore
        </button>
        <button
          onClick={() => {
            props.setConfirmRidePopupPanel(true)
          }}
          className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg"
        >
          Accept
        </button>

        
        </div>

      </div>
    </div>
  );
};

export default RidePopUp;
