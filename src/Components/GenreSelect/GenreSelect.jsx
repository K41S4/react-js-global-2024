import { useSearchParams } from 'react-router-dom';
import { genres, qenreParamName } from '../../constants';
import styles from './GenreSelect.module.css';

export const GenreSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams({ [qenreParamName]: genres[0].value });
  const selectedGenre = searchParams.get(qenreParamName);

  const handleSelect = (genre) => {
    setSearchParams((params) => {
      params.set(qenreParamName, genre);
      return params;
    });
  };

  return (
    <div className={styles.container} data-cy="genre-select">
      {genres.map((genre) => (
        <button
          key={genre.value}
          onClick={() => handleSelect(genre.value)}
          className={genre.value === selectedGenre ? styles.selectedButton : styles.button}
          data-selected={genre.value === selectedGenre}
        >
          {genre.label}
        </button>
      ))}
    </div>
  );
};
