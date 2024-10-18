import { styled } from "styled-components";
import search from "./search.png";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
  width: 566px;
  color: #d9d9d9;
  height: 56px;
  border: 1px solid;
  border-color: #c98cf1;
  background-color: inherit;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const CampoTexto = ({ setFiltro }) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado
        onChange={(evento) => {
          setFiltro(evento.target.value);
        }}
        type="text"
        placeholder="O que você procura?"
      />
      <IconeLupa src={search} alt="ícone de lupa" />
    </ContainerEstilizado>
  );
};

export default CampoTexto;
