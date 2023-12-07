
import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import './error.module.css';

function Error(props) {
  

  return props.error ? (
    <Alert variant="danger"  onClose={props.onClose} dismissible>
      <Alert.Heading>Error</Alert.Heading>
      <p>Please type in a valid city</p>
      <p>{props.error}</p>
    </Alert>
  ) : null;
}

export default Error;