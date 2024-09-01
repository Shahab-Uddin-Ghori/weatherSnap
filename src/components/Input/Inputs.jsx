import React from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";
import "../UniconDefaultProb.js";

function Inputs({ setInputCity, inputCity, updateCity }) {
  return (
    <div className="flex flex-row justify-center my-6">
      <div
        className="flex flex-row w-3/4 items-center justify-center space-x-4
    "
      >
        <input
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          placeholder="search for city..."
          onChange={(event) => {
            // console.log(event.target.value);
            setInputCity(event.target.value);
          }}
          value={inputCity}
        />
        <button onClick={updateCity}>
          <UilSearch
            size={25}
            className="text-white cursor-pointer transition ease-out  hover:scale-125"
          />
        </button>
        <UilMapMarker
          size={25}
          className="text-white cursor-pointer transition ease-out  hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-white text-xl font-light">
          °C
        </button>
        <p className="text-white mx-1 text-xl">|</p>
        <button className="imperial text-white text-xl font-light">°F</button>
      </div>
    </div>
  );
}

export default Inputs;
