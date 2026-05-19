function ConfirmModal({ title, message, onConfirm, onCancel }) {
  return (
    <div className="modalOverlay">
      <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>

        <div className="modalActions">
          <button className="btn danger" onClick={onConfirm}>
            Так, видалити
          </button>
          <button className="btn secondary" onClick={onCancel}>
            Скасувати
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;