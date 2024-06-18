import React from 'react';
import { Row } from 'react-bootstrap';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieSelect }) => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onMovieSelect={onMovieSelect} />
      ))}
    </Row>
  );
};

export default MovieList;
