import React from "react";
import "../estilos/estilo.css";
import Header from "../header/header";

import kenobi from "../imagens/Kenobi.jpg";
import boys from "../imagens/Boys.jpg";
import tempo from "../imagens/A_Roda_Tempo.jpg";

export default function Aventura() {
  return (
    <body>
      <Header />
      <main id="mainPaginas">
        <h3>Obi-Wan Kenobi</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={kenobi}
            height="350px"
            width="250px"
            alt="Capa da série mostra um homem em vestes antigas e escuras, sozinho observando o horizonte."
          />
          <p className="seriesAlign">
            Dez anos depois dos trágicos eventos de "A Vingança dos Sith",
            Obi-Wan Kenobi está exilado em Tatooine, protegendo a criança que
            poderá derrotar o Império e trazer a paz para a galáxia...
          </p>
        </div>
        <h3>The Boys</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={boys}
            height="350px"
            width="250px"
            alt="Capa da série mostra um super-herói emitindo um raio laser dos olhos, enquanto um grupo de quatro pessoas está ajoelhado diante dele, como se o adorasse."
          />
          <p className="seriesAlign">
            Hughie Campbell (Jack Quaid) fica traumatizado depois que sua
            namorada Robin (Jess Salgueiro) é morta em um impacto de alta
            velocidade com o super-herói Trem-Bala (Jessie Usher). Quando
            conhece Billy Bruto (Karl Urban), um vigilante que odeia qualquer um
            com poderes, Hughie vê a chance de expor a corrupção dos
            super-heróis. Baseada na HQ homônima de Garth Ennis.
          </p>
        </div>
        <h3>A Roda do Tempo</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={tempo}
            height="350px"
            width="250px"
            alt="Capa da série mostra quatro homens e três mulheres. Uma delas está destacada diante dos outros com roupas que remetem a uma feiticeira."
          />
          <p className="seriesAlign">
            Passada em um mundo épico e extenso onde a magia existe e apenas
            certas mulheres têm permissão para acessá-la, a história acompanha
            Moiraine, membro da poderosa organização feminina chamada Aes Sedai.
            Quando a protagonista chega na pequena cidade de Two Rivers, ela
            embarca em uma perigosa jornada com cinco jovens, um dos quais foi
            profetizado como o Dragão Renascido, que salvará ou destruirá a
            humanidade
          </p>
        </div>
      </main>
    </body>
  );
}
