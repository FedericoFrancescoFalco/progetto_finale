import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const API_URL = 'http://localhost:8080/progetto';

const Progetto = () => {
  const [progetto, setprogetto] = useState([]);

  useEffect(() => {
    const fetchprogetto = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setprogetto(data);
      } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
      }
    };
    fetchprogetto();
  }, []);

  return (
    <Container className="mt-4">
      <h1>progetto</h1>
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
          {progetto.map(progetto => (
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