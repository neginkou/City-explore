import React from "react";
import Alert from "react-bootstrap/Alert";
import styles from "./Error.module.css";

function Error({ show, errorMessage }) {
  return (
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      <div className={styles.Alert}>
        <Alert.Heading>{errorMessage}</Alert.Heading>
        <p>Try entering a real city!</p>
      </div>
    </Alert>
  );
}

export default Error;
