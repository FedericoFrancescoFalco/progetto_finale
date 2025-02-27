import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link da react-router-dom

const Home = () => {
  return (
    <Container className="mt-4">
      <Card className="text-center">
        <Card.Body>
          <Card.Title className="display-4">Benvenuto al Portale dell'Università</Card.Title>
          <Card.Text className="mt-3">
            Questo portale ti permette di accedere alle informazioni sui docenti e i progetti universitari.
            Utilizza il menu di navigazione per esplorare le varie sezioni.
          </Card.Text>
          <Button variant="primary">
            <Link to="/persona" style={{ textDecoration: 'none', color: 'white' }}>
              Visualizza il Personale
            </Link>
          </Button>{' '}
          <Button variant="secondary">
            <Link to="/progetto" style={{ textDecoration: 'none', color: 'white' }}>
              Esplora i Progetti
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
