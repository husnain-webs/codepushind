// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const WeatherData = {
  London: { id: 1, name: "London" },
  Paris: { id: 2, name: "Paris" },
};

const Home = () => {
  return (
    <div className=" flex items-center pt-20 justify-center  ">
      <div className="bg-slate-600 text-center px-20 py-10 ">
        <h1 className="bg-sky-300 py-3 px-12 rounded " >Weather App</h1>
        {Object.values(WeatherData).map((city) => (
          <div className="pt-6 text-white" key={city.id}>
            <h2 className="pt-2 ">{city.name}</h2>
            <Link to={`/city/${city.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
