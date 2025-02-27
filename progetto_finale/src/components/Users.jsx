import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { fetchUsers } from '../api';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4" style={{ color: '#28a745' }}>Lista Utenti</h1>
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
        <thead style={{ background: '#28a745', color: 'white' }}>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Users;
