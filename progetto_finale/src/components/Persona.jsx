import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';

const API_URL = 'http://localhost:8080/persone';

const Persone = () => {
  const [persone, setPersone] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersone = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati');
        }
        const data = await response.json();
        setPersone(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPersone();
  }, []);

  if (loading) {
    return (
      <Container className="mt-4">
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
      <h1>Persone</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Posizione</th>
            <th>Stipendio</th>
          </tr>
        </thead>
        <tbody>
          {persone.map(persona => (
            <tr key={persona.id}>
              <td>{persona.id}</td>
              <td>{persona.nome}</td>
              <td>{persona.cognome}</td>
              <td>{persona.posizione}</td>
              <td>{persona.stipendio}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Persone;
