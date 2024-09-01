import React from "react";

function TimeAndLocation({ weather }) {
  return (
    <div>
      <div className="flex flex-row items-center justify-center my-2">
        <p className="text-white text-xl font-extralight">
          Friday, 30 Aug 2024 | Local time: 12:46 PM
        </p>
      </div>
      <div className="flex items-center justify-center my-2">
        <p className="text-white text-3xl font-medium">
          {weather.name}, {weather.sys?.country}
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
