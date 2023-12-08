// import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./CityForm.module.css";


function CityForm(props) {
  // const [typedCity, setTypedCity] = useState("");

  // function handleCityChange() {

    // setTypedCity(e.target.value);
  //   props.handleUpdateCity();
  // }

  function submitCity(e) {
    e.preventDefault();
    props.handleChangeCity();
   

  }


  return (
    <>
    <Form onSubmit={submitCity}>
      <Form.Control
        className={styles.Form}
        type="location"
        id="inputCity"
        aria-describedby="location"
        placeholder="Enter a City"
        onChange={props.handleUpdateCity}
      />
      <Button className={styles.Button} variant="primary" type="submit">
        Explore!
      </Button>{" "}
      </Form>
    </>
  );
}

export default CityForm;