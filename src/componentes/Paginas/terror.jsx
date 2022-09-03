import React from "react";
import "../estilos/estilo.css";
import Header from "../header/header";

import penny from "../imagens/Penny.jpg";
import stranger from "../imagens/Stranger.jpg";
import walking from "../imagens/WalkingDead.jpg";

export default function Terror() {
  return (
    <body>
      <Header />
      <main id="mainPaginas">
        <h3>Penny Dreadful</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={penny}
            height="350px"
            width="250px"
            alt="Capa da série mostra  uma mulher com vestes antigas e escuras no estilo gótico, olhando fixamente para frente."
          />
          <p className="seriesAlign">
            Em Penny Dreadful, alguns dos personagens mais famosos e
            assustadores da literatura mundial, como o Dr. Frankestein e sua
            criação, o eternamente jovem Dorian Gray e icônicas figuras do
            romance Dracula, estão todos vivendo nos cantos obscuros de Londres
            Vitoriana
          </p>
        </div>
        <h3>The Walking Dead</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={walking}
            height="350px"
            width="250px"
            alt="Capa da série mostra uma cidade abandonada e uma estrada. Na faixa à esquerda carros abandonados, aparentemente deixando a cidade. À direita, um homem armado em cima de um cavalo vai sozinho em direção à cidade. "
          />
          <p className="seriesAlign">
            O mundo vive momentos de caos, quando o xerife Rick Grimes (Andrew
            Lincoln) acorda, depois de passar muito tempo em coma num hospital.
            Mal sabe ele que nada mais é como costumava ser. Assustadoramente, o
            improvável aconteceu e o apocalipse chegou com uma assustadora
            invasão de mortos-vivos.
          </p>
        </div>
        <h3>Stranger Things</h3>
        <div className="seriesFlex">
          <img
            className="imagem-pad"
            src={stranger}
            height="350px"
            width="250px"
            alt="Capa da série mostra  a ilustração de nove personagens. A personagem em destaque está com a mão estendida demostrando um poder sobrenatural. Os três personagens na parte de baixo estão em cima de bicicletas com faróis acesos. Todos estão com expressões de espanto. O cenário atrás deles mostra paisagens sombrias."
          />
          <p className="seriesAlign">
            Situada no interior de Indiana, na década de 1980, a história inicia
            com o desaparecimento de Will, um menino de 12 anos. Enquanto a
            família e os amigos tentam entender o que aconteceu, o chefe de
            polícia Hooper inicia uma investigação e se depara com experiências
            secretas conduzidas pelo governo numa base militar no subúrbio da
            cidade. Ao mesmo tempo, os amigos de Will - Mike, Dustin e Lucas -
            tentam localizá-lo por conta própria, mas acabam encontrando Eleven,
            uma menina misteriosa, com estranhos poderes.
          </p>
        </div>
      </main>
    </body>
  );
}
