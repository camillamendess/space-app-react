import { styled } from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
  margin: 0 15px;
`;

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src="imagens/logo.png" alt="Logo" />
      <CampoTexto />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
