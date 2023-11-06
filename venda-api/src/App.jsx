import './App.css';
import Listagem from './pages/Listagem.jsx';
import CriaVenda from './pages/CriaVenda.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/vendas" element={<Listagem />} />\
        <Route path="/criavenda" element={<CriaVenda />} />\
      </Routes>
    </Router>
    
    
  );
  
}

export default App;
