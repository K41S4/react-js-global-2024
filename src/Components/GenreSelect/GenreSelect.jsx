import { genres, genreParamName, sortParamName, queryParamName } from '../../constants';
import styles from './GenreSelect.module.css';
import { useSearchParams } from 'next/navigation';

export const GenreSelect = () => {
  const searchParams = useSearchParams();

  return (
    <form action={''} method="GET" className={styles.container}>
      {genres.map((genre) => (
        <button
          type="submit"
          name={genreParamName}
          value={genre.value}
          key={genre.value}
          className={genre.value === (searchParams.get(genreParamName) ?? '') ? styles.selectedButton : styles.button}
        >
          {genre.label}
        </button>
      ))}
      <input type="hidden" name={sortParamName} value={searchParams.get(sortParamName)} />
      <input type="hidden" name={queryParamName} value={searchParams.get(queryParamName)} />
    </form>
  );
};
