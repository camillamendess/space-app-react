## Space App - Projeto em React com Styled Components

Este projeto foi desenvolvido durante um curso da Alura para praticar as habilidades em React e Styled Components. O objetivo é criar uma aplicação que utilize a biblioteca de estilização em conjunto com os conceitos fundamentais do React.

### O que são Styled Components?
Styled Components é uma biblioteca para React e React Native que permite que você escreva CSS dentro do seu código JavaScript. Com ela, você pode criar componentes que possuem estilos específicos, utilizando a sintaxe do CSS, mas com a vantagem de que os estilos são aplicados de forma escopada ao componente, evitando conflitos de estilo e facilitando a manutenção do código. Exemplo: 

```bash
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Titulo = styled.h1`
  color: #333;
`;

function App() {
  return (
    <Container>
      <Titulo>Bem-vindo ao meu projeto!</Titulo>
      <p>Esta é uma aplicação utilizando React e Styled Components.</p>
    </Container>
  );
}

```
Nesse exemplo, o componente Container é uma div e o Titulo é um h1 estilizados usando Styled Components, permitindo uma abordagem modular e reutilizável.
