import React, { useEffect, useState } from "react";
import "./App.css";
import ButtonTop from "./components/Buttons/ButtonTop";
import Inputs from "./components/Input/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";

// APIKEY
const APIKEY = `98092c54b629e85a8a8adc138825a7b2`;

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("karachi");
  const [inputCity, setInputCity] = useState(city);

  useEffect(() => {
    getWeather();
  }, [city]);

  const getWeather = async () => {
    try {
      const apiUrl = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`
      );
      const weatherData = await apiUrl.json();
      setWeather(weatherData);

      console.clear();
      console.log(`Weather data of ${city} city...`);
      console.log(weatherData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateCity = () => {
    setCity(inputCity);
    setInputCity("");
  };

  return (
    <div className="mx-auto max-w-screen-md mt-5 py-5 px-32  bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <ButtonTop />
      <Inputs
        setInputCity={setInputCity}
        inputCity={inputCity}
        updateCity={updateCity}
      />
      <TimeAndLocation weather={weather} />
      <TemperatureAndDetails weather={weather} />
      <Forecast title="hourly forecast" city={city} forecastType="hourly" />
      <Forecast title="daily forecast" city={city} forecastType="daily" />
    </div>
  );
}

export default App;
