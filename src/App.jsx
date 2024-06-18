import React from 'react';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';
import HomePage from './components/HomePage';
import { ThemeProvider, useTheme } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

const MainApp = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Navbar bg={theme} variant={theme} expand="lg" className="sticky-navbar">
        <Container>
          <Navbar.Brand href="#">Movie Search App</Navbar.Brand>
          <Nav className="ml-auto">
            <Form.Check
              type="switch"
              id="theme-switch"
              label="Toggle Theme"
              onChange={toggleTheme}
            />
          </Nav>
        </Container>
      </Navbar>
      <Container className="container-content">
        <HomePage />
      </Container>
    </div>
  );
};

export default App;
