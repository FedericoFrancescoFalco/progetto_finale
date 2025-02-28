import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar style={{ background: '#222831', padding: '10px' }} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'white', fontWeight: 'bold' }}>Università degli studi di Antani</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: '#ff5722' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/users" style={{ color: '#ff5722' }}>Users</Nav.Link>
            <Nav.Link as={Link} to="/posts" style={{ color: '#ff5722' }}>Posts</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: '#ff5722' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/persona" style={{ color: '#ff5722' }}>Persona</Nav.Link>
            <Nav.Link as={Link} to="/progetto" style={{ color: '#ff5722' }}>Progetto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
