import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const API_URL = 'http://localhost:8080/persone';

const Persone = () => {
  const [persone, setPersone] = useState([]);

  useEffect(() => {
    const fetchPersone = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPersone(data);
      } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
      }
    };
    fetchPersone();
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4" style={{ color: '#ff6f61' }}>Lista del Personale</h1>
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
        <thead style={{ background: '#ff6f61', color: 'white' }}>
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
              <td>{persona.stipendio} €</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Persone;

