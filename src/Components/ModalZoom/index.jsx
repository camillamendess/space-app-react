const ModalZoom = ({foto}) => {
  return (
    <>
      <dialog opens={!!foto}>
        <p>Exemplo do Mozilla</p>
        <form method="dialog">
          <button type="submit">ok</button>
          </form>
      </dialog>
    </>
  )
}

export default ModalZoom;