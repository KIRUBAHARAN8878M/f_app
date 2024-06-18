import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import MovieList from './MovieList';
import MovieModal from './MovieModal';
import { useTheme } from '../ThemeContext'; // Import the useTheme hook
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const HomePage = () => {
  const { theme } = useTheme(); // Get the current theme
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchPopularMovies = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?s=popular&apikey=${API_KEY}`);
    setMovies(response.data.Search);
  };

  const searchMovies = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    setMovies(response.data.Search);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <>
      <Form onSubmit={searchMovies} style={{ padding: '10px' }}>
        <Form.Group as={Row} controlId="formSearch">
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Search for a movie..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Col>
          <Col sm="2">
            <Button type="submit">Search</Button>
          </Col>
        </Form.Group>
      </Form>
      <MovieList movies={movies} onMovieSelect={setSelectedMovie} />
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onHide={() => setSelectedMovie(null)}
          theme={theme} // Pass the current theme to the modal
        />
      )}
    </>
  );
};

export default HomePage;
