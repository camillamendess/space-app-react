import { styled } from "styled-components";
import ItemNavegacao from "./ItemNavegacao";
import { useState } from "react";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 15px;
  width: 236px;
`;

const BarraLateral = () => {
  // Estado para armazenar o índice do item ativo
  const [ativoIndex, setAtivoIndex] = useState(0);

  // Função para alterar o item ativo
  const handleItemClick = (index) => {
    setAtivoIndex(index);
  };

  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo="/icones/home-ativo.png"
            iconeInativo="/icones/home-inativo.png"
            ativo={ativoIndex === 0}
            onClick={() => handleItemClick(0)}
          >
            Início
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"
            ativo={ativoIndex === 1}
            onClick={() => handleItemClick(1)}
          >
            Mais vistas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-curtidas-ativo.png"
            iconeInativo="/icones/mais-curtidas-inativo.png"
            ativo={ativoIndex === 2}
            onClick={() => handleItemClick(2)}
          >
            Mais curtidas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/novas-ativo.png"
            iconeInativo="/icones/novas-inativo.png"
            ativo={ativoIndex === 3}
            onClick={() => handleItemClick(3)}
          >
            Novas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/surpreenda-me-ativo.png"
            iconeInativo="/icones/surpreenda-me-inativo.png"
            ativo={ativoIndex === 4}
            onClick={() => handleItemClick(4)}
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
