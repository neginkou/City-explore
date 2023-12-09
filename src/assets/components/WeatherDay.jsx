import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./WeatherDay.module.css";

function WeatherDay(props) {
  console.log(props.weather);
  return (
    <Card   style={{ width: "18rem" }}>
      <Card.Body className={styles.card}>
        <ul>
          <li style={{ fontWeight: "bold", listStyle: "none" }}>
            Date: {props.weather.date}
          </li>
          <li>High: {props.weather.highTemp}F</li>
          <li>Low: {props.weather.lowTemp}F</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default WeatherDay;