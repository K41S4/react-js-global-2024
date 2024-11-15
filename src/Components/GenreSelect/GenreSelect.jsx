import { genres, genreParamName, sortParamName, queryParamName } from '../../constants';
import styles from './GenreSelect.module.css';

export const GenreSelect = async ({ searchParams }) => {
  return (
    <form action={''} method="GET" className={styles.container}>
      {genres.map((genre) => (
        <button
          type="submit"
          name={genreParamName}
          value={genre.value}
          key={genre.value}
          className={genre.value === (searchParams[genreParamName] ?? '') ? styles.selectedButton : styles.button}
        >
          {genre.label}
        </button>
      ))}
      <input type="hidden" name={sortParamName} value={searchParams[sortParamName]} />
      <input type="hidden" name={queryParamName} value={searchParams[queryParamName]} />
    </form>
  );
};
