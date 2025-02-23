import styled from "styled-components";
import fundoCapa from "../assets/fundoCapa.jpg"; // Certifique-se do caminho correto

export const CapaContainer = styled.div`
  text-align: center;
  color: #333;

  h1 {
    font-size: 2em;
  }
`;

export const SaibaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const NomeContainer = styled.div`
  text-align: center;
  margin-top: 10px;

  h2 {
    color: #555;
    font-size: 1.5em;
  }
`;

export const FundoEsquerdo = styled.div`
  width: 70%;
  height: 100vh;
  background: url(${fundoCapa}) no-repeat center center;
  background-size: cover;

`;

export const FundoDireito = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
     width: 30%; 
     aspect-ratio: 1; 
     object-fit: cover;
     margin-top: -90rem ;
  }
`;
