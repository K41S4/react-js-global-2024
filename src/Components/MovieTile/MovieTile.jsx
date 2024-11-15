import { GENRE_CONNECTOR } from '../../constants';
import { getSearchParamsString } from '../../utils';
import styles from './MovieTile.module.css';
import Link from 'next/link';

export const MovieTile = async ({ id, imageUrl, title, releaseYear, relevantGenres, searchParams }) => {
  const href = `/${id}?${getSearchParamsString(searchParams)}`;

  return (
    <div className={styles.container}>
      <Link className={styles.link} href={href} data-cy="movie-tile">
        <img className={styles.image} src={imageUrl} alt="" />
        <div className={styles.detailsContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.releaseYear}>{releaseYear}</div>
        </div>
        {!!relevantGenres?.length && (
          <div className={styles.relevantGenres}>{relevantGenres.join(GENRE_CONNECTOR)}</div>
        )}
      </Link>
    </div>
  );
};
