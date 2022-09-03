import React from "react";
import "../estilos/estilo.css";
import Header from "../header/header";

import abobora from "../imagens/pumpkin.jpg";
import herois from "../imagens/herois.jpeg";
import desenho from "../imagens/desenho.jpeg";

export default function Grupos() {
  return (
    <body>
      <Header />
      <main id="mainPaginas">
        <div>
          <h2 className="h2-grupos">
            Participe de grupos e conheça novas pessoas!
          </h2>
        </div>
        <a id="textoDecoracaoLinks" href="horadoterror.html">
          <h3>Hora do terror !</h3>
        </a>
        <div id="grupoTerror" className="gruposFlex">
          <a className="gruposAlign" href="horadoterror.html">
            <img src={abobora} alt="grupo hora do terror" width="300px" />
          </a>
          <p className="gruposAlign">
            Grupo destinado aos amantes dos thrillers e suspense!
          </p>
        </div>
        <a id="textoDecoracaoLinks" href="superherois.html">
          <h3>Super Herois !</h3>
        </a>
        <div id="grupoHeroi" className="gruposFlex">
          <a className="gruposAlign" href="superherois.html">
            <img src={herois} alt="grupo superherois" width="300px" />
          </a>
          <p className="gruposAlign">
            DC ou Marvel? Venha nos contar quais são seus heróis e vilões
            favoritos!
          </p>
        </div>
        <a id="textoDecoracaoLinks" href="desenhoseanimacoes.html">
          <h3>Desenhos e animações</h3>
        </a>
        <div id="grupoAnimacao" className="gruposFlex">
          <a className="gruposAlign" href="desenhoseanimacoes.html">
            <img src={desenho} alt="grupo desenhos e animações" width="300px" />
          </a>
          <p className="gruposAlign">
            Você curte desenhos e animações? Então venha se juntar ao nosso
            grupo!
          </p>
        </div>
      </main>
    </body>
  );
}
