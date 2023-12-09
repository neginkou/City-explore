import React from "react";
import Card from "react-bootstrap/Card";
import styles from './Movie.module.css';

function Movie(props) {
  return(

  <Card style={{ width: "18rem" }}>
    <Card.Body className={styles.movieCard}>
      <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>
        {props.movies.name}
      </Card.Title>
      <ul>
        <li>Description: {props.movies.description}</li>
        <li>Average Votes: {props.movies.voteAvg}</li>
      </ul>
    </Card.Body>
  </Card>
  )
}

export default Movie;