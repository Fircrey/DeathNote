import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Inicio } from './pages/inicio.tsx';
import App from './pages/App.tsx';
import Reglas from './pages/Reglas.tsx';
import Historial from './pages/Historial.tsx';
import Renunciar from './pages/Renunciar.tsx';

import './index.css';
import './styless/App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pagina principal" element={<App />} />
        <Route path="/reglas" element={<Reglas />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/renunciar" element={<Renunciar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
