import React from "react";
import "../estilos/estilo.css";
import Header from "../header/header";

import blackMirror from "../imagens/BlackMirror.jpg";
import Feed from "../imagens/Feed.jpg";
import Upload from "../imagens/Upload.jpg";

export default function Ficcao() {
  return (
    <body>
      <Header />
      <main id="mainPaginas">
        <h3>Black Mirror</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={blackMirror}
            height="350px"
            width="250px"
            alt="Capa da série mostra algumas imagens de pessoas refletidas em um espelho quebrado."
          />
          <p className="seriesAlign">
            Criada pelo jornalista e roteirista Charlie Brooker, "Black Mirror"
            é uma série inglesa exibida no Channel 4 e composta por episódios
            que apresentam as potencialidades sombrias de tecnologias já
            existentes - como biochips, reality shows e mídias sociais.
          </p>
        </div>
        <h3>Upload</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={Upload}
            height="350px"
            width="250px"
            alt="Capa da série mostra uma mulher segurando um dispositivo digital que cobre os seus olhos. Na tela do dispositivo há a imagem desta mulher sorrindo para um homem e mais três pessoas no fundo. Atrás de todos eles, uma paisagem."
          />
          <p className="seriesAlign">
            Em 2033, pessoas que estão próximas da morte podem fazer o "upload"
            em hotéis de realidade virtual de 6 empresas. Nora, mora no Brooklyn
            e trabalha com atendimento ao cliente para Lakeview;, empresa de
            pós-vida digital. Quando Nathan, um programador playboy, sofre um
            acidente de carro, sua namorada faz o "upload" dele no mundo virtual
            de Nora.
          </p>
        </div>
        <h3>The Feed</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={Feed}
            height="350px"
            width="250px"
            alt="Capa da série mostra um olho que,ao ínves de  íris ou pupila, mostra uma imagem de várias cores misturadas e refletidas."
          />
          <p className="seriesAlign">
            Situada em Londres em um futuro próximo, a história se passa ao
            redor da família de Lawrence Hatfield, o criador da tecnologia de
            The Feed. Difundido na sociedade, o aparato é implantado próximo ao
            cérebro das pessoas, permitindo-lhes compartilhar informações,
            emoções e memórias instantâneas. A esposa de Hatfield, Meredith, é a
            CEO da poderosa companhia que comanda o The Feed, enquanto seu filho
            possui uma relação hesitante com o pai e é casado com uma americana
            que questiona os perigos de as pessoas estarem constantemente
            online.
          </p>
        </div>
      </main>
    </body>
  );
}
