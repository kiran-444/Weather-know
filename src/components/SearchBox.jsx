import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./WeatherApp.css"; // reuse same CSS

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [err, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "YOUR_API_KEY";

  const getWeatherInfo = async () => {
    let res = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    let jsonResponse = await res.json();
    if (jsonResponse.cod !== 200) throw new Error("City not found");

    return {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
  };

  const handleChange = (evt) => setCity(evt.target.value);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
      setCity("");
    } catch {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-box-form">
      <TextField
        id="city"
        label="City name"
        variant="outlined"
        required
        value={city}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
      {err && <p className="error-msg">No such place exists!</p>}
    </form>
  );
};

export default SearchBox;