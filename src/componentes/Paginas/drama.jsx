import React from "react";
import "../estilos/estilo.css";
import Header from "../header/header";

import lacasa from "../imagens/Lacasa.jpg";
import biglittle from "../imagens/BigLittle.jpg";
import thisIsUs from "../imagens/ThisIsUs.jpg";

export default function Drama() {
  return (
    <body>
      <Header />
      <main id="mainPaginas">
        <h3>La Casa del Papel</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={lacasa}
            height="350px"
            width="250px"
            alt="Capa da série mostra uma ilustração de cinco personagens e, abaixo deles, um desenho da Casa da Moeda da Espanha."
          />
          <p className="seriesAlign">
            Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu
            líder manipula a polícia para realizar um plano. Será o maior roubo
            da história, ou uma missão em vão?
          </p>
        </div>
        <h3>Big Litle Lies</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={biglittle}
            height="350px"
            width="250px"
            alt="Capa da série mostra  metade do rosto de três mulheres, seus olhares expressam mistério e desconfiança. Atrás delas um céu azul com algumas nuvens."
          />
          <p className="seriesAlign">
            Big Little Lies conta a história de três mães que se aproximam
            quando seus filhos passam a estudar juntos no jardim de infância.
            Até então, elas levam vidas aparentemente perfeitas. A cidade
            pequena entra em choque com um assassinato na festa da escola. Os
            pais começam a serem interrogados para investigação do crime.
          </p>
        </div>
        <h3>This is Us</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={thisIsUs}
            height="350px"
            width="250px"
            alt="Capa da série mostra três imagens diferentes: na primeira, acima, um homem beija a testa de uma mulher sorrindo. Na segunda, ao meio, um homem abraça uma mulher. Na terceira, abaixo, um casal sorri, olhando pra frente."
          />
          <p className="seriesAlign">
            Centrada em torno de personagens que compartilham o mesmo
            aniversário, a história segue várias décadas da vida de Jack e
            Rebecca Pearson (Milo Ventimiglia e Mandy Moore). Quando a trama se
            desenrola, atravessa inúmeras linhas de tempo e entrelaça as
            histórias de pessoas cujas vidas se conectam de maneiras
            inesperadas. Cheio de memoráveis performances de seu elenco
            aclamado, This Is Us é um drama inteligente e intrigante, também com
            Sterling K. Brown, Chrissy Metz e Justin Hartley.
          </p>
        </div>
      </main>
    </body>
  );
}
