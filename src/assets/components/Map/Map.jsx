import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./Map.module.css";

const API_KEY = import.meta.env.VITE_API_KEY;

function Map({ latitude, longitude, selectedCity }) {
  return (
    <div className={styles.Map}>
      {latitude && longitude && (
        <Card className={styles.Card} style={{ width: "auto" }}>
          <Card.Img
            variant="top"
            src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${latitude},${longitude}&size=400x300&format=png`}
          />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>{selectedCity}</Card.Title>
            <Card.Text>
              LAT: {latitude} LONG: {longitude}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Map;
