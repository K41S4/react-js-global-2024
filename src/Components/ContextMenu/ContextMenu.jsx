import { Link, useSearchParams } from 'react-router-dom';
import styles from './ContextMenu.module.css';

export const ContextMenu = ({ movieId, onClose }) => {
  const [searchParams] = useSearchParams();

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={onClose}>
        x
      </button>
      <Link className={styles.edit} to={`/${movieId}/edit?${searchParams.toString()}`}>
        Edit
      </Link>
    </div>
  );
};
