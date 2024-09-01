import React from "react";
import Para from "./Para"; // Importing the Para component
import { format } from "date-fns-tz"; // For formatting date/time based on timezone

function TimeAndLocation({ weather }) {
  if (!weather || !weather.sys) {
    return <Para text="Loading..." className="text-white text-xl" />;
  }

  // Get city name and country code
  const cityName = weather.name;
  const countryCode = weather.sys.country;

  // Get timezone information from the weather data
  const timezone = weather.timezone ? weather.timezone / 3600 : 0; // Convert seconds to hours

  // Create a Date object for current time
  const now = new Date();

  // Format date and time based on the timezone
  const localTime = format(now, "cccc, dd MMM yyyy | hh:mm a", {
    timeZone: `Etc/GMT${timezone > 0 ? "-" : "+"}${Math.abs(timezone)}`,
  });

  return (
    <div>
      {/* Display current date and time */}
      <div className="flex flex-row items-center justify-center my-2">
        <Para text={localTime} className="text-white text-xl font-extralight" />
      </div>
      {/* Display city and country */}
      <div className="flex items-center justify-center my-2">
        <Para
          text={`${cityName}, ${countryCode}`}
          className="text-white text-3xl font-medium"
        />
      </div>
    </div>
  );
}

export default TimeAndLocation;
