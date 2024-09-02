import React, { useEffect, useState } from "react";
import "./App.css";
import ButtonTop from "./components/Buttons/ButtonTop";
import Inputs from "./components/Input/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import Swal from "sweetalert2";

const APIKEY = `98092c54b629e85a8a8adc138825a7b2`;

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("karachi");
  const [inputCity, setInputCity] = useState(city);
  const [units, setUnits] = useState("metric");

  const fetchWeatherData = async (city, units) => {
    try {
      const apiUrl = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${APIKEY}`
      );
      const weatherData = await apiUrl.json();

      if (!weatherData || weatherData.cod !== 200) {
        Swal.fire({
          icon: "error",
          title: "City Not Found",
          text: "Please enter a valid city name",
        });
      } else {
        setWeather(weatherData);
        console.clear();
        console.log(weatherData);

        return true;
      }
    } catch (error) {
      console.log(error.message);
    }
    return false;
  };

  useEffect(() => {
    fetchWeatherData(city, units).then((success) => {
      if (success && city) {
        Swal.fire({
          icon: "success",
          title: `Weather data of ${city}`,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            toast.querySelector(
              ".swal2-timer-progress-bar"
            ).style.backgroundColor = "#87CEEB";
          },
        });
      }
    });
  }, [city]);

  useEffect(() => {
    if (units) {
      fetchWeatherData(city, units);
      Swal.fire({
        icon: "success",
        title: `Temperature unit set to ${units === "metric" ? "°C" : "°F"}`,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        backdrop: true,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
          toast.querySelector(
            ".swal2-timer-progress-bar"
          ).style.backgroundColor = "#FF6347";
        },
      });
    }
  }, [units]);

  const updateCity = () => {
    setCity(inputCity);
    setInputCity("");
  };

  const handleUnitChange = (unit) => {
    if (units !== unit) {
      setUnits(unit);
    }
  };

  // This function will be passed to ButtonTop to update the city when clicked
  const handleCityClick = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <div className="mx-auto max-w-screen py-5 px-16 bg-gradient-to-br from-cyan-700 to-blue-700 min-h-screen shadow-xl shadow-gray-400">
      <ButtonTop onCityClick={handleCityClick} setCity={setCity} />{" "}
      {/* Passing the function to ButtonTop */}
      <Inputs
        setInputCity={setInputCity}
        inputCity={inputCity}
        updateCity={updateCity}
        handleUnitChange={handleUnitChange}
        units={units}
      />
      <TimeAndLocation weather={weather} />
      <TemperatureAndDetails weather={weather} />
      <Forecast
        title="hourly forecast"
        city={city}
        forecastType="hourly"
        units={units}
      />
      <Forecast
        title="daily forecast"
        city={city}
        forecastType="daily"
        units={units}
      />
    </div>
  );
}

export default App;
