import styles from './GenreSelect.module.css';

export const GenreSelect = ({ allGenres, selectedGenre, onSelect }) => {
  return (
    <div className={styles.container} data-cy="genre-select">
      {allGenres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          className={genre === selectedGenre ? styles.selectedButton : styles.button}
          data-selected={genre === selectedGenre}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};
