import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const API_URL = 'http://localhost:8080/progetto';

const Progetto = () => {
  const [progetto, setProgetto] = useState([]);

  useEffect(() => {
    const fetchProgetto = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProgetto(data);
      } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
      }
    };
    fetchProgetto();
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4" style={{ color: '#0077b6' }}>Elenco Progetti</h1>
      <Table
        striped
        bordered
        hover
        style={{
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <thead style={{ background: '#0077b6', color: 'white' }}>
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
              <td>{progetto.budget} €</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Progetto;

