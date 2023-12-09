import React from "react";
import WeatherDay from "./WeatherDay.jsx";
import WeatherStyles from "./Weather.module.css";

function Weather(props) {
  console.log(props.weather);

  return (
    <div className={WeatherStyles.weatherContainer}>
      {Array.isArray(props.weather) && props.weather.map((value, idx) => (
        <WeatherDay key={idx} weather={value} />
      ))}
    </div>
  );
}

export default Weather;