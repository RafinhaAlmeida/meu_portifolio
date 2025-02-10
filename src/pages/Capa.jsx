import { TitleContainer, SaibaMaisContainer, FundoContainer, EuContainer } from "./Capa.styles";

import MinhaCara from "../images/MinhaCara"
import FundoCapa from "../images/FundoCapa"



export function Capa() {

  return (
    <div>
      <FundoContainer>
        <img src={FundoCapa} alt="FundoCapa" />
      </FundoContainer>
      <EuContainer>
        <img src={MinhaCara} alt="MinhaCara" />
      </EuContainer>
      <TitleContainer>
          Meu Portfólio como técnico em informática 
        </TitleContainer>

      <SaibaMaisContainer>
        <button>Saiba mais...</button>
      </SaibaMaisContainer>
    </div>
  
)
}
