import React from "react";
import { CapaContainer, SaibaContainer, NomeContainer, FundoEsquerdo, FundoDireito } from "../styles/capa.styles";
import fundoCapa from "../assets/fundoCapa.jpg";
import eu from "../assets/minhaCara.jpg";

export function Capa() {
  return (
    <div>
      <FundoEsquerdo Background={fundoCapa} alt="Imagem de fundo da capa"></FundoEsquerdo>

      <CapaContainer>
      <h1>Meu Portfólio como Técnico de TI</h1>
      </CapaContainer>

      <SaibaContainer>
        <button>
           Saiba mais...
        </button>
      </SaibaContainer>
        
      <NomeContainer>
        <h2>Rafael Rodrigues de Almeida</h2>
      </NomeContainer>

      <FundoDireito>
        <img src={eu} alt="Foto de Rafael Rodrigues de Almeida" />
      </FundoDireito>

    </div>
  );
}
