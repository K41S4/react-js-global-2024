import Link from 'next/link';
import styles from './ContextMenu.module.css';
import { useSearchParams } from 'next/navigation';

export const ContextMenu = ({ movieId, onClose }) => {
  const searchParams = useSearchParams();
  const href = `/${movieId}/edit?${searchParams.toString()}`;

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
