import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./CityForm.module.css";

function CityForm({ changeCity }) {
  const [typedCity, setTypedCity] = useState("");

  const handleCityChange = (e) => {
    setTypedCity(e.target.value);
  }

  const submitCity = () => {
    changeCity(typedCity);
  }

  return (
    <>
      <Form.Control
        className={styles.Form}
        type="location"
        id="inputCity"
        aria-describedby="location"
        placeholder="Enter a City"
        onChange={handleCityChange}
      />
      <Button className={styles.Button} variant="primary" onClick={submitCity}>
        Explore!
      </Button>{" "}
    </>
  );
}

export default CityForm;
