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
import Para from "./Para";
import Span from "./Span";
import Img from "./Img";

/**
 * This component, `TemperatureAndDetails`, shows the weather details.
 * It uses smaller reusable components (`Para` and `Span`) to keep the code clean.
 */
function TemperatureAndDetails({ weather, unit }) {
  // Get weather data or show "Loading" if the data is not available yet.
  const temp = weather.main?.temp || "Loading";
  const weatherDescription = weather.weather?.[0]?.description || "Loading...";
  const weatherIcon = weather.weather?.[0]?.icon;
  const feelLike = weather.main?.feels_like || "Loading";
  const humidity = weather.main?.humidity || "Loading";
  const wind = weather.wind?.speed || "Loading";
  const sunset = new Date(weather.sys?.sunset * 1000).toLocaleTimeString();
  const sunrise = new Date(weather.sys?.sunrise * 1000).toLocaleTimeString();

  return (
    <div className=" max-w-screen ">
      {/* Weather description text, centered at the top */}
      <div className="flex items-center justify-center py-2 text-xl text-cyan-300">
        <Para text={weatherDescription} />
      </div>

      {/* Main weather details: icon, temperature, and other data */}
      <div className="flex flex-row items-center justify-evenly text-white py-3">
        {/* Weather icon */}

        <Img weatherIcon={weatherIcon} />
        {/* Temperature text */}
        <Para className="text-6xl ml-12" text={`${Math.round(temp)}°`} />
        <div className="flex flex-col space-y-2">
          {/* Weather details like real feel, humidity, and wind speed */}
          <WeatherDetail
            icon={<UilTemperatureHalf size={18} className="mr-1" />}
            label="Real feel:"
            value={`${feelLike}°`}
          />
          <WeatherDetail
            icon={<UilTear size={18} className="mr-1" />}
            label="Humidity:"
            value={`${humidity}%`}
          />
          <WeatherDetail
            icon={<UilWind size={18} className="mr-1" />}
            label="Wind:"
            value={`${Math.round(wind * 5 - 2)} km/h`}
          />
        </div>
      </div>

      {/* Extra details: sunrise, sunset, high, and low temperatures */}
      <div className="flex flex-row justify-center items-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <WeatherDetail
          className="font-light flex "
          label="Sunrise:"
          value={sunrise}
        />
        <Divider />
        <UilSunset />
        <WeatherDetail
          className="font-light flex"
          label="Sunset:"
          value={sunset}
        />
        <Divider />
        <UilArrowUp />
        <WeatherDetail
          className="font-light flex"
          label="High:"
          value={`${weather.main?.temp_max || "loading"}°`}
        />
        <Divider />
        <UilArrowDown />
        <WeatherDetail
          className="font-light flex"
          label="Low:"
          value={`${weather.main?.temp_min || "loading"}°`}
        />
      </div>
    </div>
  );
}

/**
 * The `WeatherDetail` component shows one piece of weather data with an icon.
 * It takes an icon, a label (like "Humidity:"), and a value (like "50%").
 */
function WeatherDetail({
  icon,
  label,
  value,
  className = "font-light text-md",
}) {
  return (
    <div className={`flex flex-row ${className} items-center justify-center`}>
      {icon} {/* The icon for the weather detail */}
      {label} {/* The label for the weather detail */}
      <Span text={value} className="font-medium ml-1" /> {/* The value */}
    </div>
  );
}

/**
 * The `Divider` component creates a simple "|" line to separate different weather details.
 */
function Divider() {
  return <Para className="font-light flex" text="|" />;
}

export default TemperatureAndDetails;
