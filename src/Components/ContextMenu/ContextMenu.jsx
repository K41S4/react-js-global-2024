import Link from 'next/link';
import styles from './ContextMenu.module.css';

export const ContextMenu = ({ movieId, onClose }) => {
  const href = `/${movieId}/edit?`;

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={onClose}>
        x
      </button>
      <Link className={styles.edit} href={href}>
        Edit
      </Link>
    </div>
  );
};
