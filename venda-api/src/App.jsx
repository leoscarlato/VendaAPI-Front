import { useState } from 'react';
import './App.css';
import Listagem from './pages/Listagem.jsx';
import Login from './pages/Login.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/vendas" element={<Listagem />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
