import { Portal } from 'react-portal';
import styles from './Dialog.module.css';

export const Dialog = ({ children, title, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        <button className={styles.closeButton} id="close" onClick={onClose}>
          x
        </button>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};
