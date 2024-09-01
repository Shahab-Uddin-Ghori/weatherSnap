import React from "react";

const cities = [
  {
    title: "Pakistan",
  },
  {
    title: "India",
  },
  {
    title: "Canada",
  },
  {
    title: "London",
  },
  {
    title: "China",
  },
  {
    title: "Turkey",
  },
];

function ButtonTop() {
  return (
    <div className="flex items-center justify-around my-2">
      {cities.map((city, index) => {
        return (
          <button key={index} className="text-white text-lg font-medium">
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonTop;
