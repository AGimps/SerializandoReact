import React from "react";
import "../estilos/estilo.css";
import Header from "../header/header";

import breaking from "../imagens/Breaking Bad.jpg";
import horas from "../imagens/24 horas.jpg";
import csiMiami from "../imagens/CSI Miami.jpg";

export default function Policial() {
  return (
    <body>
      <Header />
      <main id="mainPaginas">
        <h3>Breaking Bad</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={breaking}
            height="350px"
            width="250px"
            alt="Capa da série mostra  um homem em um deserto usando uma camisa, sapatos e meias, mas sem as calças. Atrás dele um trailer liberando uma fumaça colorida."
          />
          <p className="seriesAlign">
            Bryan Cranston é a estrela da série no papel de Walter White, um
            professor de química que leva uma vida difícil e luta para pagar as
            contas sustentando a esposa (Anna Gunn) e o filho, que tem
            dificuldades físicas (RJ Mitte). Sua vida inteira muda diante de um
            diagnóstico perturbador: câncer do pulmão sem possibilidade de cura.
            Com poucos anos de vida e nada mais a perder, Walter usa seus
            conhecimentos de química para fazer e vender metanfetamina com um
            dos seus ex-alunos (Aaron Paul). Seus negócios crescem e as mentiras
            também, mas nada detém Walter em sua missão de assegurar o futuro da
            família após a sua morte, mesmo que ele tenha que arriscar a vida da
            família toda.
          </p>
        </div>
        <h3>24 Horas</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={horas}
            height="350px"
            width="250px"
            alt="Capa da série mostra imagem desfocada do rosto de um homem. Em cima de um de seus olhos está o número vinte e quatro."
          />
          <p className="seriesAlign">
            A primeira temporada começa e termina a meia noite no dia das
            eleições presidenciais primárias da Califórnia em Los Angeles. A
            tarefa de Jack Bauer é proteger o candidato David Palmer de uma
            tentativa de assassinato e resgatar sua família daqueles que tramam
            o assassinato, que buscam retaliação ao envolvimento de Jack e
            Palmer em uma missão do exército americano nos Balcãs.
          </p>
        </div>
        <h3>CSI</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={csiMiami}
            height="350px"
            width="250px"
            alt="Capa da série mostra um grupo de cinco pessoas olhando fixamente para frente. Todos com a expressão séria"
          />
          <p className="seriesAlign">
            Após o grande sucesso da série original, uma segunda série nos
            mesmos formatos do CSI: Crime Scene Investigation foi criada.
            Surgiu, então a série CSI: Miami, que teve seu primeiro episódio
            derivado do episódio Cross-Jurisdictions da série original, ocorrido
            no final de sua segunda temporada e que foi ao ar em 9 de maio de
            2002. Neste episódio, os CSIs Warrick Brown e Catherine Willows vão
            a Miami ajudar os CSIs locais a resolver o assassinato do ex chefe
            de polícia de Las Vegas, que foi encontrado morto após uma festa em
            sua residência.
          </p>
        </div>
      </main>
    </body>
  );
}
