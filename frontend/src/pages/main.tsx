import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.tsx'
import { DeathHistory } from './DeathHistory.tsx' // Asegurate de crearlo en /pages

import './index.css'
import './styless/App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/historial" element={<DeathHistory />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
