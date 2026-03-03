import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

const InfoBox = ({ info }) => {
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=774&auto=format&fit=crop";
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1624956091370-d8144dca91ad?q=80&w=926&auto=format&fit=crop";

  const getWeatherImage = () => {
    if (info.humidity > 80) return RAIN_URL;
    if (info.temp > 15) return HOT_URL;
    return COLD_URL;
  };

  const getWeatherIcon = () => {
    if (info.humidity > 80) return <ThunderstormIcon sx={{ fontSize: 40 }} />;
    if (info.temp > 15) return <BeachAccessIcon sx={{ fontSize: 40 }} />;
    return <AcUnitIcon sx={{ fontSize: 40 }} />;
  };

  return (
    <Card className="info-card">
      <CardMedia
        sx={{ height: 140 }}
        image={getWeatherImage()}
        title="weather image"
      />
      <CardContent>
        <Box className="card-header">
          <Typography gutterBottom variant="h5">
            {info.city}
          </Typography>
          {getWeatherIcon()}
        </Box>
        <Typography variant="body2" color="text.secondary" component="div">
          <p>Temperature: {info.temp}°C</p>
          <p>Humidity: {info.humidity}%</p>
          <p>Minimum Temperature: {info.tempMin}°C</p>
          <p>Maximum Temperature: {info.tempMax}°C</p>
          <p>
            The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}°C
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;