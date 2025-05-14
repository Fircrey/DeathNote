import { Link } from 'react-router-dom';
import "../styless/Nav.css";

interface NavProps {
  onRegistrarClick?: () => void;
}

export function Nav({ onRegistrarClick }: NavProps) {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/reglas">Reglas</Link></li>
        <li>
          <button className="nav-button" onClick={onRegistrarClick}>
            Registrar Muerte
          </button>
        </li>
        <li><Link to="/historial">Historial</Link></li>
        <li><Link to="/renunciar">Renunciar Death Note</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
