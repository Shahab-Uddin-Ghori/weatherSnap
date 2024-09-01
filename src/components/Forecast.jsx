import React, { useEffect, useState } from "react";
import Img from "./Img"; // Importing the Img component
import Para from "./Para"; // Importing the Para component

const APIKEY = `98092c54b629e85a8a8adc138825a7b2`;

function Forecast({ title, city, forecastType, units }) {
  // Accept units as a prop
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const getForecast = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${APIKEY}`
        );
        const data = await response.json();

        if (forecastType === "hourly") {
          // Get the first 5 data points for hourly forecast
          const hourlyForecast = data.list.slice(0, 5);
          setForecastData(hourlyForecast);
        } else if (forecastType === "daily") {
          // Aggregate daily forecast data
          const dailyForecast = [];
          for (let i = 0; i < data.list.length; i += 8) {
            dailyForecast.push(data.list[i]);
          }
          setForecastData(dailyForecast);
        }
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    getForecast();
  }, [city, forecastType, units]); // Include units in the dependency array

  return (
    <div>
      {/* Title of the forecast section */}
      <div className="flex items-center justify-start mt-2">
        <Para text={title} className="text-white font-medium uppercase" />
      </div>
      <hr className="my-2" />

      {/* Forecast details */}
      <div
        className={`flex ${
          forecastType === "hourly" ? "flex-row" : "flex-row"
        } items-center justify-between text-white overflow-x-auto`}
      >
        {forecastData.map((forecast, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* Time or Date of the forecast */}
            <Para
              text={
                forecastType === "hourly"
                  ? new Date(forecast.dt * 1000).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : new Date(forecast.dt * 1000).toLocaleDateString()
              }
              className="font-light text-sm"
            />

            {/* Using the Img component to render the weather icon */}
            <Img weatherIcon={forecast.weather[0].icon} />

            {/* Temperature */}
            <Para
              text={`${Math.round(
                forecast.main.temp || forecast.main.temp_max
              )}°${units === "metric" ? "C" : "F"}`}
              className="font-medium"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
