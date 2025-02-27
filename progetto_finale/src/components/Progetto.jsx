import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';

const API_URL = 'http://localhost:8080/progetto';

const Progetto = () => {
  const [progetti, setProgetti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgetti = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati');
        }
        const data = await response.json();
        setProgetti(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProgetti();
  }, []);

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Caricamento...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">Si è verificato un errore: {error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1>Progetti</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Inizio</th>
            <th>Fine</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {progetti.map(progetto => (
            <tr key={progetto.id}>
              <td>{progetto.id}</td>
              <td>{progetto.nome}</td>
              <td>{progetto.inizio}</td>
              <td>{progetto.fine}</td>
              <td>{progetto.budget}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Progetto;
