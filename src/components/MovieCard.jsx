import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './MovieCard.css';

const MovieCard = ({ movie, onMovieSelect }) => {
  return (
    <Col className="d-flex">
      <Card className="flex-fill movie-card" onClick={() => onMovieSelect(movie)}>
        <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Year}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
