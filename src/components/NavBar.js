import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <h4>
          <Link className="link" to="/">
            Inicio
          </Link>
        </h4>
        <h4>
          <Link className="link" to="/lesson">
            Lecciones
          </Link>
        </h4>
        <h4>
          <Link className="link" to="/create">
            Crear Lecciones
          </Link>
        </h4>
      </nav>
    );
  }
}

export default NavBar;
