import { useState } from 'react';
import Listagem from './pages/Listagem.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/vendas" element={<Listagem />} />
      </Routes>
    </Router>
  );
}

export default App;
