import { useNavigate } from "react-router-dom";
import "../styless/Reglas.css";

export function Reglas() {
  const navigate = useNavigate();

  const volverAPrincipal = () => {
    navigate("/pagina principal");
  };

  return (
    <div className="reglas-container">
      <h2 className="reglas-titulo">📜 Reglas de la Death Note</h2>
      <ul className="reglas-lista">
        <li>✦ El humano cuyo nombre sea escrito en esta libreta morirá.</li>
        <li>✦ Esta libreta no tendrá efecto a menos que quien la escriba tenga en mente la cara de la persona.</li>
        <li>✦ Si la causa de muerte se escribe en los siguientes 40 segundos, así ocurrirá.</li>
        <li>✦ Si no se especifica la causa de muerte, la persona morirá de un ataque al corazón.</li>
        <li>✦ Luego de especificar la causa, los detalles deben ser escritos en los siguientes 6 minutos y 40 segundos.</li>
      </ul>

      <button className="volver-btn" onClick={volverAPrincipal}>
        ← Volver a la página principal
      </button>
    </div>
  );
}

export default Reglas;
