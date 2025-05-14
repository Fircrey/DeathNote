import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/rules">Reglas</Link></li>
        <li><Link to="/register">Registrar Muerte</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;