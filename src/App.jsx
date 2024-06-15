import styled from "styled-components";
import EstilosGlobais from "./Components/EstilosGlobais";
import Cabecalho from "./Components/Cabecalho";
import BarraLateral from "./Components/BarraLateral";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  margin: 0;
` 

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLateral />
    </FundoGradiente>
  )
}

export default App;
