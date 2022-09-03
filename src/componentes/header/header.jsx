import React from "react";
import { Link } from "react-router-dom";
import "../estilos/estilo.css";

export default function Header() {
  return (
    <header>
      <nav>
        <h1>Serializando</h1>
        <ul className="estilo_links">
          <li>
            <Link to={"/home"}>Início</Link>
          </li>
          <li>
            <Link to={"/aventura"}>Aventura</Link>
          </li>
          <li>
            <Link to={"/comedia"}>Comedia</Link>
          </li>
          <li>
            <Link to={"/drama"}>Drama</Link>
          </li>
          <li>
            <Link to={"/ficcao"}>Ficção Científica</Link>
          </li>
          <li>
            <Link to={"/policial"}>Policial</Link>
          </li>
          <li>
            <Link to={"/terror"}>Terror</Link>
          </li>
          <li>
            <Link to={"/grupos"}>Grupos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
