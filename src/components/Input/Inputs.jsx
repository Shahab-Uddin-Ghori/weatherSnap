import React from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";
import Button from "../Buttons/Button.jsx";
import Para from "../Para.jsx";

function Inputs({
  setInputCity,
  inputCity,
  updateCity,
  handleUnitChange,
  units,
}) {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          placeholder="search for city..."
          onChange={(event) => setInputCity(event.target.value)}
          value={inputCity}
        />
        <Button
          onClick={updateCity}
          text={
            <UilSearch
              size={25}
              className="text-white cursor-pointer transition ease-out hover:scale-125"
            />
          }
        ></Button>
        <Button>
          <UilMapMarker
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
        </Button>
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <Button
          onClick={() => handleUnitChange("metric")}
          text={<Para text="°C" className="text-white text-xl font-light" />}
          className={units === "metric" ? "bg-gray-500" : ""}
        />
        <Para text="|" className="text-white mx-1 text-xl" />
        <Button
          onClick={() => handleUnitChange("imperial")}
          text={<Para text="°F" className="text-white text-xl font-light" />}
          className={units === "imperial" ? "bg-gray-500" : ""}
        />
      </div>
    </div>
  );
}

export default Inputs;
