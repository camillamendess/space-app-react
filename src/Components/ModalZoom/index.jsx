import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import CloseIcon from '@mui/icons-material/Close';

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
  display: flex;
  justify-content: center;
`

const ButtonFechar = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const ModalZoom = ({foto}) => {
  return (
    <>
      {foto && <>
      <Overlay />
      <DialogEstilizado open={!!foto}>
        <Imagem foto={foto} expandida={true} />
        <form method="dialog">
          <ButtonFechar type="submit"><CloseIcon fontSize="medium" style={{color: "#fff"}}/> </ButtonFechar>
          </form>
      </DialogEstilizado>
      </>}
    </>
  )
}

export default ModalZoom;