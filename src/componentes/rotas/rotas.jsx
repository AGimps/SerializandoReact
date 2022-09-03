import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Serializando from "../Paginas/serializando";
import Login from "../Paginas/login";
import Cadastro from "../Paginas/cadastro";
import Aventura from "../Paginas/aventura";
import Comedia from "../Paginas/comedia";
import Drama from "../Paginas/drama";
import Ficcao from "../Paginas/ficcao";
import Policial from "../Paginas/policial";
import Terror from "../Paginas/terror";
import Grupos from "../Paginas/grupos";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Serializando />} />
        <Route path="/aventura" element={<Aventura />} />
        <Route path="/comedia" element={<Comedia />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/ficcao" element={<Ficcao />} />
        <Route path="/policial" element={<Policial />} />
        <Route path="/terror" element={<Terror />} />
        <Route path="/grupos" element={<Grupos />} />
      </Routes>
    </BrowserRouter>
  );
}
