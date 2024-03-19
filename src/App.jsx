// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import components
import NavBar from './components/NavBar';
import AboutMe from './pages/AboutMe';
import './App.css'

// Componentes para diferentes rotas
const Home = () => 
<div>
  Home
</div>;
const About = () => 
<div>
  <AboutMe />
</div>;
const Contact = () => 
<div>
  Contact
</div>;


// Componente principal da aplicação
const App = () => {
  return (
    <Router>
      <div>
        {/* Barra de navegação */}
        <NavBar />

        {/* Definição de rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;