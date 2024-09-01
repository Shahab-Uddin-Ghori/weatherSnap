import React, { useEffect, useState } from "react";
const APIKEY = `98092c54b629e85a8a8adc138825a7b2`;

function Forecast({ title, city }) {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const getForecast = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIKEY}`
        );
        const data = await response.json();
        // Get the first 5 data points, each with a 4-hour gap
        const hourlyForecast = data.list.slice(0, 5);
        setForecastData(hourlyForecast);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    getForecast();
  }, [city]);

  return (
    <div>
      <div className="flex items-center justify-start mt-4">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {forecastData.map((forecast, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">
              {new Date(forecast.dt * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt="icon"
              className="w-12 my-1"
            />
            <p className="font-medium">{Math.round(forecast.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
