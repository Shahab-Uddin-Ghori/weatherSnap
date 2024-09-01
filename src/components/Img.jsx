import React from "react";

function Img({ weatherIcon }) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
      alt="icon"
      className="w-20"
    />
  );
}

export default Img;
