import { Link, useSearchParams } from 'react-router-dom';
import { GENRE_CONNECTOR } from '../../constants';
import styles from './MovieTile.module.css';

export const MovieTile = ({ id, imageUrl, movieName, releaseYear, relevantGenres }) => {
  const [searchParams] = useSearchParams();
  return (
    <Link className={styles.link} to={`/${id}?${searchParams.toString()}`} data-cy="movie-tile">
      <div className={styles.container}>
        <img className={styles.image} src={imageUrl} alt="" />
        <div className={styles.detailsContainer}>
          <div className={styles.movieName}>{movieName}</div>
          <div className={styles.releaseYear}>{releaseYear}</div>
        </div>
        {!!relevantGenres?.length && (
          <div className={styles.relevantGenres}>{relevantGenres.join(GENRE_CONNECTOR)}</div>
        )}
      </div>
    </Link>
  );
};
