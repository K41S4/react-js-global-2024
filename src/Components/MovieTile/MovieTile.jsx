import styles from './MovieTile.module.css';

export const MovieTile = ({ imageUrl, movieName, releaseYear, relevantGenres, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <img src={imageUrl} alt={`${movieName}`} />
      <div className={styles.detailsContainer}>
        <div className={styles.movieName}>{movieName}</div>
        <div className={styles.releaseYear}>{releaseYear}</div>
      </div>
      {relevantGenres && <div className={styles.relevantGenres}>{relevantGenres.join(' & ')}</div>}
    </div>
  );
};
