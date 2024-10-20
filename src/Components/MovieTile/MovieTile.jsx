import { GENRE_CONNECTOR } from '../../constants';
import styles from './MovieTile.module.css';

export const MovieTile = ({ imageUrl, movieName, releaseYear, relevantGenres, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img className={styles.image} src={imageUrl} alt="" />
      <div className={styles.detailsContainer}>
        <div className={styles.movieName}>{movieName}</div>
        <div className={styles.releaseYear}>{releaseYear}</div>
      </div>
      {!!relevantGenres?.length && <div className={styles.relevantGenres}>{relevantGenres.join(GENRE_CONNECTOR)}</div>}
    </div>
  );
};
