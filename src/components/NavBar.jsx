// Header.jsx
import '../assets/styles/Header.css';
import { NavLink } from 'react-router-dom';



function NavBar() {
  return (
    <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>Pokedex</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>About Me</NavLink></li>
    </ul>
  );
}

export default NavBar;