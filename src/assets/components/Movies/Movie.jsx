import React from "react";
import Card from "react-bootstrap/Card";
import styles from './Movie.module.css';

function Movie({ movies }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body className={styles.movieCard}>
        <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>
          {movies.name}
        </Card.Title>
        <ul>
          <li>Description: {movies.description}</li>
          <li>Average Votes: {movies.voteAvg}</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default Movie;
