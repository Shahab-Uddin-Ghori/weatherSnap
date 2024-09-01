import React from "react";
import {
  UilTear,
  UilArrowUp,
  UilArrowDown,
  UilTemperatureHalf,
  UilWind,
  UilSunset,
  UilSun,
} from "@iconscout/react-unicons";

function TemperatureAndDetails({ weather }) {
  return (
    <div>
      <div className="flex items-center justify-center py-2 text-xl text-cyan-300">
        <p>{weather.weather?.[0]?.description || "Loading..."}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}
          alt="icon"
          className="w-20 "
        />
        <p className="text-5xl">
          {Math.round(weather.main?.temp) || "Loading"}°
        </p>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row font-light text-sm items-center justify-center">
            <UilTemperatureHalf size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">
              {weather.main?.feels_like || "Loading"}°
            </span>
          </div>

          <div className="flex flex-row font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">
              {weather.main?.humidity || "Loading"}%
            </span>
          </div>

          <div className="flex flex-row font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">
              {weather.wind?.speed || "Loading"} km/h
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light flex">
          Rise: <span className="font-medium ml-1 ">06:45 AM</span>
        </p>
        <p className="font-light flex">|</p>

        <UilSunset />
        <p className="font-light flex">
          Set: <span className="font-medium ml-1">07:45 PM</span>
        </p>
        <p className="font-light flex">|</p>

        <UilArrowUp />
        <p className="font-light flex">
          High:
          <span className="font-medium ml-1">
            {weather.main?.temp_max || "loading"}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilArrowDown />
        <p className="font-light flex">
          Low:
          <span className="font-medium ml-1">
            {weather.main?.temp_max || "loading"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
