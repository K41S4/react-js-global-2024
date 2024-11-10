import { useRouter } from 'next/router';
import { genres, genreParamName, sortParamName, queryParamName } from '../../constants';
import styles from './GenreSelect.module.css';

export const GenreSelect = () => {
  const router = useRouter();

  return (
    <form action={router.asPath.split('?')[0] ?? ''} method="GET" className={styles.container}>
      {genres.map((genre) => (
        <button
          type="submit"
          name={genreParamName}
          value={genre.value}
          key={genre.value}
          className={genre.value === (router.query[genreParamName] ?? '') ? styles.selectedButton : styles.button}
        >
          {genre.label}
        </button>
      ))}
      <input type="hidden" name={sortParamName} value={router.query[sortParamName]} />
      <input type="hidden" name={queryParamName} value={router.query[queryParamName]} />
    </form>
  );
};
