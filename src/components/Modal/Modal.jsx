import css from './Modal.module.css';

export default function Modal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <h2>Confirm</h2>
        <p>Are you sure you want to delete this contact?</p>
        <div className={css.modalActions}>
          <button onClick={onConfirm} className={css.confirmBtn}>
            Yes, Delete
          </button>
          <button onClick={onClose} className={css.cancelBtn}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
