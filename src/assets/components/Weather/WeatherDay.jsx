import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./WeatherDay.module.css";

function WeatherDay({ weather }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body className={styles.card}>
        <ul>
          <li style={{ fontWeight: "bold", listStyle: "none" }}>
            Date: {weather.date}
          </li>
          <li>High: {weather.highTemp}F</li>
          <li>Low: {weather.lowTemp}F</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default WeatherDay;
