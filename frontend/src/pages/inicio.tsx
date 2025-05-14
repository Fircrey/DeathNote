import { useNavigate } from 'react-router-dom';
import "../styless/Inicio.css";

export function Inicio() {
  const navigate = useNavigate();

  const irARegistrar = () => {
    console.log("✅ Botón presionado: navegando a /pagina principal");
    navigate("/pagina principal");
  };

  return (
    <div className="inicio-container">
      <h1 className="inicio-titulo">Bienvenido a la Death Note</h1>
      <p className="inicio-texto">
        Esta aplicación te permite registrar muertes ficticias inspiradas en el universo de Death Note.
      </p>
      <button className="inicio-boton" onClick={irARegistrar}>
        Comenzar
      </button> 
    </div>
  );
}
