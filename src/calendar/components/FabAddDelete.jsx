import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddDelete = () => {

  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleDelte = () => {
    startDeletingEvent();
  }

  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={ handleDelte }
      style={{
        display: hasEventSelected ? '': 'none'
      }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  )
}
