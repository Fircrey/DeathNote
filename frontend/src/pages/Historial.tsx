import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styless/Historial.css";

interface Person {
  full_name: string;
  image_url: string;
  cause_of_death: string;
  death_time: string;
}

interface KillResponse {
  person: Person;
  description: string;
}

export function Historial() {
  const [data, setData] = useState<KillResponse[]>([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/kills")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener datos");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="historial-container">
      <h2 className="historial-titulo">☠️ VICTIMAS</h2>
      {error && <p className="error">{error}</p>}
      <div className="historial-lista">
        {data.map((item, index) => (
          <div key={index} className="kill-card">
            <img src={item.person.image_url} alt="rostro" className="kill-img" />
            <div className="kill-info">
              <h3>{item.person.full_name}</h3>
              <p><strong>Causa:</strong> {item.person.cause_of_death}</p>
              <p><strong>Hora:</strong> {new Date(item.person.death_time).toLocaleString()}</p>
              {item.description && (
                <p><strong>Detalles:</strong> {item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      
      <button className="volver-btn" onClick={() => navigate("/pagina principal")}>
        ← Volver
      </button>
    </div>
  );
}

export default Historial;
