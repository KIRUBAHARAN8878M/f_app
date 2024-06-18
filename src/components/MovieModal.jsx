import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import './MovieModal.css'; // Import the CSS file for modal styling

const API_KEY = import.meta.env.REACT_APP_API_KEY;


const MovieModal = ({ movie, onHide, theme }) => {
  const [details, setDetails] = useState(null);

  const fetchMovieDetails = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`);
    setDetails(response.data);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movie]);

  return (
    <Modal show={!!movie} onHide={onHide} className={`movie-modal ${theme}`}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.Title}</Modal.Title>
      </Modal.Header>
      {details && (
        <Modal.Body>
          <p><strong>Genre:</strong> {details.Genre}</p>
          <p><strong>Plot:</strong> {details.Plot}</p>
          <p><strong>Ratings:</strong> {details.imdbRating}</p>
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieModal;



