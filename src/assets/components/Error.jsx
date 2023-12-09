import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import styles from "./Error.module.css";
import { propTypes } from "react-bootstrap/esm/Image";

function Error(props) {
  if (props.show)
    return (
      <Alert
        
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
        <div className={styles.Alert}>
        <Alert.Heading>{props.errorMessage}</Alert.Heading>
        <p>Please type a valid city</p>

        </div>
      </Alert>
    );
}

export default Error;