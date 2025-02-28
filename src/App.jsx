import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';
import Posts from './components/Posts';
import About from './components/About';
import Persona from './components/Persona';
import Progetto from './components/Progetto';

const App = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/persona" element={<Persona />} />
          <Route path="/progetto" element={<Progetto />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
