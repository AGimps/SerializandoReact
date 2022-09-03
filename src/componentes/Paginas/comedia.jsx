import React from "react";
import "../estilos/estilo.css";
import Header from "../header/header";

import friends from "../imagens/Friends.jpg";
import bigbang from "../imagens/BigBang.jpg";
import suits from "../imagens/Suits.jpg";

export default function Comedia() {
  return (
    <body>
      <Header />
      <main id="mainPaginas">
        <h3>Friends</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={friends}
            height="350px"
            width="250px"
            alt="Capa da série mostra seis amigos, três homens e três mulheres, com os braços dados, em roupas de gala, andando pelas ruas de Nova York. Dois deles carregam uma taça de bebida."
          />
          <p className="seriesAlign">
            Rachel, Monica, Phoebe, Joey, Chandler e Ross. Rachel chega no
            Central Perk, após deixar seu noivo Barry no altar e se muda para o
            apartamento de Mônica. Ross tenta constantemente dizer a Rachel que
            a ama, enquanto sua ex-esposa lésbica, Carol, está esperando seu
            bebê. Joey é apresentado como um ator lutando por seu espaço,
            enquanto Phoebe trabalha como massagista. Chandler termina com
            namorada Janice, que frequentemente retorna em outros episódios.
          </p>
        </div>
        <h3>The Big Bang Theory</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={bigbang}
            height="350px"
            width="250px"
            alt="Capa da série mostra quatro homens e três mulheres, três deles estão sentados em um sofá,e os outros estão de pé atrás deles, alguns riem e outros estão com  expressão de surpresa."
          />
          <p className="seriesAlign">
            Leonard e Sheldon são físicos brilhantes que entendem como o
            universo funciona. Mas nada dessa inteligência ajuda os dois a
            interagir com as pessoas. Tudo isso começa a mudar quando uma jovem
            bela e liberal chamada Penny se muda para o apartamento ao lado.
            Sheldon, o colega de quarto de Leonard, contenta-se a passar as
            noites jogando com os amigos socialmente disfuncionais dos dois, os
            cientistas Wolowitz e Koothrappali. Mas Leonard vê em Penny todo um
            novo universo de possibilidades... incluindo o amor.
          </p>
        </div>
        <h3>Suits</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={suits}
            height="350px"
            width="250px"
            alt="Capa da série mostra dois homens caminhando lado a lado, um deles usa um terno alinhado e o outro usa um terno em estilo despojado e com paletó aberto."
          />
          <p className="seriesAlign">
            Uma fuga de uma transação de drogas que deu errado, Mike Ross
            (Patrick J. Adams), tendo abandonado os estudos, o rapaz não pode
            exercer a profissão de advogado, mas sua mente brilhante faz com que
            ele se torne parte essencial nos casos defendidos por seu chefe
            Harvey Specter (Gabriel Macht), um dos melhores advogados de Nova
            Iorque.
          </p>
        </div>
      </main>
    </body>
  );
}
