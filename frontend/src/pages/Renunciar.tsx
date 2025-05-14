// src/pages/Renunciar.tsx
import { useNavigate } from "react-router-dom";
import "../styless/Renunciar.css";

export function Renunciar() {
  const navigate = useNavigate();

  const volverInicio = () => {
    navigate("/");
  };

  return (
    <div className="renunciar-container">
      <h2 className="renunciar-titulo">¡Has renunciado a la Death Note!</h2>
      <p className="renunciar-texto">
        Al renunciar a la Death Note, olvidarás por completo su existencia y todo lo relacionado con ella. Tu memoria será borrada.
      </p>
      <button className="renunciar-boton" onClick={volverInicio}>
        ⬅ Volver al inicio
      </button>
    </div>
  );
}

export default Renunciar;
