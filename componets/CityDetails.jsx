// CityDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const WeatherData = {
  1: { name: "London", description: "Cloudy", temp: 15 },
  2: { name: "Paris", description: "Sunny", temp: 20 },
};

const CityDetails = () => {
  const { id } = useParams(); // Get the id from the URL
  const city = WeatherData[id];

  return (
    <div className="flex items-center pt-20 justify-center">
      <div className= " text-white bg-slate-600 text-center px-20 py-10">
      <h1>{city.name}</h1>
      <p>{city.description}</p>
      <p>Temperature: {city.temp}°C</p>
      </div>
    </div>
  );
};

export default CityDetails;
