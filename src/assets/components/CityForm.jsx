import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./CityForm.module.css";

function CityForm(props) {
  const [typedCity, setTypedCity] = useState("");

  function handleUpdateCity(e) {
    setTypedCity(e.target.value);
  }

  function submitCity(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    props.ChangeCity(typedCity);
  }

  return (
    <Form onSubmit={submitCity}>
      <Form.Control
        className={styles.Form}
        type="location"
        id="inputCity"
        aria-describedby="location"
        placeholder="Enter a City"
        onChange={handleUpdateCity}
      />
      <Button className={styles.Button} variant="primary" type="submit">
        Explore!
      </Button>{" "}
    </Form>
  );
}

export default CityForm;