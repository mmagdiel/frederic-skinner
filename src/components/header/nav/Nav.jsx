import React from "react";
import { Link } from "gatsby";
import "./styles.css";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav_menu">
        <li>
          <Link to="/biography" className="nav_menu_link">
            Biografía
          </Link>
        </li>
        <li>
          <Link to="/books" className="nav_menu_link">
            Libros
          </Link>
        </li>
        <li>
          <Link to="/awards" className="nav_menu_link">
            Premios
          </Link>
        </li>
        <li>
          <Link to="/research" className="nav_menu_link">
            Investigaciones
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };
