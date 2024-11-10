import Link from 'next/link';
import styles from './ContextMenu.module.css';
import { useRouter } from 'next/router';

export const ContextMenu = ({ movieId, onClose }) => {
  const router = useRouter();
  const params = new URLSearchParams(router.query);
  const href = `/${movieId}/edit?${params.toString()}`;

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
