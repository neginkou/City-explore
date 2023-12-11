import React from "react";
import Movie from "./Movie.jsx";
import Styles from "./Movies.module.css";

function Movies({ movies }) {
  return movies.map((movie, index) => (
    <Movie key={index} movies={movie} />
  ));
}

export default Movies;
