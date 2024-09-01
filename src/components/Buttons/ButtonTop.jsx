import React, { useState } from "react";

// Define the cities with their respective country colors or flag colors
const cities = [
  { title: "Pakistan", color: "linear-gradient(to right, #008C8C, #004C4C)" }, // Pakistan flag colors
  { title: "India", color: "linear-gradient(to right, #FF9933, #138808)" }, // India flag colors
  { title: "Canada", color: "linear-gradient(to right, #FF0000, #FFFFFF)" }, // Canada flag colors
  { title: "London", color: "linear-gradient(to right, #0033A0, #FFFFFF)" }, // UK flag colors
  { title: "China", color: "linear-gradient(to right, #DE2910, #FFCC00)" }, // China flag colors
  { title: "Turkey", color: "linear-gradient(to right, #E30A17, #FFFFFF)" }, // Turkey flag colors
];

function ButtonTop({ setCity }) {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
    setCity(cityName); // Pass the city name to parent component
  };

  return (
    <div className="flex items-center justify-around my-2">
      {cities.map((city, index) => (
        <button
          key={index}
          className="text-white text-lg font-medium"
          style={{
            background: city.title === selectedCity ? city.color : "",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onClick={() => handleCityClick(city.title)}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default ButtonTop;
