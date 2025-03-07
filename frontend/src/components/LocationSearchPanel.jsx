import React from "react";

const LocationSearchPanel = (props) => {
console.log(props)

  // Sample array for location
  const locations = [
    "Patel Nagar 1st Block 1st Cross, Bangalore",
    "Patel Nagar 2nd Block 1st Cross, Bangalore",
    "Patel Nagar 3rd Block 1st Cross, Bangalore",
    "Patel Nagar 4th Block 1st Cross, Bangalore",
  ];

  return (
    <div>
      {/* demo location examples */}

      { locations.map((elem, index) => {
        return (
          <div onClick={() =>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}
          key={index} 
          className="flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl items-center justify-start my-2">
            <h2 className="flex items-center justify-center w-12 h-8 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">
              {elem}
            </h4>
          </div>
        )
      })
      }

      
    </div>
  );
};

export default LocationSearchPanel;
