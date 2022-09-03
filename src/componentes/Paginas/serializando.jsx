import React from "react";
import "../estilos/estilo.css";
import Header from "../header/header";

import Walking from "../imagens/WalkingDead.jpg";
import Suits from "../imagens/Suits.jpg";
import tempo from "../imagens/A_Roda_Tempo.jpg";
import blackMirror from "../imagens/BlackMirror.jpg";
import bigLittle from "../imagens/BigLittle.jpg";

export default function Serializando() {
  return (
    <body>
      <Header />
      <main id="mainPaginas">
        <h2 className="pad-botton">Seja bem vindo(a)</h2>
        <p className="pad-botton">
          Descubra novas séries marcantes navegando nas seções acima ou junte-se
          à um grupo e conte sobre suas séries favoritas!
        </p>
        <div className="grupoDebate">
          <h3>Uma série que você pode gostar...</h3>
          <iframe
            id="videoJanela"
            width="890"
            height="420"
            src="https://www.youtube.com/embed/YFXHfEqMcis"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </main>
      <br />
      <div className="destaque">
        <a href="terror.html">
          <img
            className="imagem-mainpage"
            src={Walking}
            width="250px"
            height="350px"
            alt="Capa da série mostra uma cidade abandonada e uma estrada. Na faixa à esquerda carros abandonados, aparentemente deixando a cidade. À direita, um homem armado em cima de um cavalo vai sozinho em direção à cidade."
          />
        </a>
        <a href="comedia.html">
          <img
            className="imagem-mainpage"
            src={Suits}
            width="250px"
            height="350px"
            alt="Capa da série mostra dois homens caminhando lado a lado, um deles usa um terno alinhado e o outro usa um terno em estilo despojado e com paletó aberto."
          />
        </a>
        <a href="aventura.html">
          <img
            className="imagem-mainpage"
            src={tempo}
            width="250px"
            height="350px"
            alt="Capa da série mostra quatro homens e três mulheres. Uma delas está destacada diante dos outros com roupas que remetem a uma feiticeira. "
          />
        </a>
        <a href="ficcao.html">
          <img
            className="imagem-mainpage"
            src={blackMirror}
            width="250px"
            height="350px"
            alt="Capa da série mostra algumas imagens de pessoas refletidas em um espelho quebrado."
          />
        </a>
        <a href="drama.html">
          <img
            className="imagem-mainpage"
            src={bigLittle}
            width="250px"
            height="350px"
            alt="Capa da série mostra  metade do rosto de três mulheres, seus olhares expressam mistério e desconfiança. Atrás delas um céu azul com algumas nuvens."
          />
        </a>
      </div>
    </body>
  );
}
