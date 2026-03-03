import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css"; 

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Raibag",
    feelsLike: 24.24,
    temp: 24,
    tempMin: 20,
    tempMax: 30,
    humidity: 40,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-container">
      <h2 className="weather-header">Weather Know</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;