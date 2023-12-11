import React from "react";
import WeatherDay from "./WeatherDay.jsx";

function Weather({ weather }) {
  return weather.map((day, index) => <WeatherDay key={index} weather={day} />);
}

export default Weather;
