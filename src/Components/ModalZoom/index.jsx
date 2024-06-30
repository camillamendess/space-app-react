import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import { useEffect, useState } from "react";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  padding: 0;
  border: 0;
  background: transparent;
  form {
    button {
      position: absolute;
      top: 15px;
      right: 15px;
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`

const ModalZoom = ({foto, aoAlternarFavorito}) => {

  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => { 
    if (foto ) {
      setModalAberto(true)
    }
  }, [foto]);

  const fecharModal = () => {
    setModalAberto(false)
  }

  return (
    <>
      {foto && modalAberto && <>
      <Overlay />
      <DialogEstilizado open={!!foto}>
        <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
        <form method="dialog">
          <button type="submit" onClick={fecharModal}>
            <img src="/icones/fechar.png" alt="fechar" />
          </button>
          </form>
      </DialogEstilizado>
      </>}
    </>
  )
}

export default ModalZoom;