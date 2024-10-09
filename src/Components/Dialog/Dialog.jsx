import { Portal } from 'react-portal';
import styles from './Dialog.module.css';
import FocusTrap from 'focus-trap-react';

export const Dialog = ({ children, title, onClose }) => {
  return (
    <Portal>
      <FocusTrap initialFocus="#close">
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>{title}</h2>
              <button id="close" onClick={onClose} className={styles.closeButton}>
                x
              </button>
            </div>
            <div className={styles.modalBody}>{children}</div>
          </div>
        </div>
      </FocusTrap>
    </Portal>
  );
};
