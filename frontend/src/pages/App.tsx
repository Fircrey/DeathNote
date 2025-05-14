import { useState } from "react";
import { RegisterDeath } from "./RegisterDeath";
import Nav from "./Nav";
import "../styless/App.css";

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleRegistrarClick = () => {
    setMostrarFormulario(true);
  };

  return (
    <div className="App">
      <h1 className="deathnote-title">Death Note</h1>
      <Nav onRegistrarClick={handleRegistrarClick} />

      
      {mostrarFormulario && <RegisterDeath />}
    </div>
  );
}

export default App;
