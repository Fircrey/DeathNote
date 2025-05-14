import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterDeath } from "./RegisterDeath";
import Nav from "./Nav";
import "../styless/App.css"; // Importar estilos

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="deathnote-title">Death Note</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<h2>Inicio</h2>} />
          <Route path="/rules" element={<h2>Reglas de la Death Note</h2>} />
          <Route path="/register" element={<RegisterDeath />} />
          <Route path="/about" element={<h2>Acerca de la Death Note</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
