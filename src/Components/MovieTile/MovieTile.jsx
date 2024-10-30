import { Link, useSearchParams } from 'react-router-dom';
import { GENRE_CONNECTOR } from '../../constants';
import styles from './MovieTile.module.css';
import { ContextMenu } from '../ContextMenu/ContextMenu';
import { useState } from 'react';

export const MovieTile = ({ id, imageUrl, title, releaseYear, relevantGenres }) => {
  const [searchParams] = useSearchParams();
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = (event) => {
    event.preventDefault();
    setShowMenu(true);
  };

  const handleCloseMenu = (event) => {
    event.preventDefault();
    setShowMenu(false);
  };

  return (
    <div className={styles.container}>
      <Link
        className={styles.link}
        to={`/${id}?${searchParams.toString()}`}
        data-cy="movie-tile"
        onContextMenu={handleOpenMenu}
      >
        <img className={styles.image} src={imageUrl} alt="" />
        <div className={styles.detailsContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.releaseYear}>{releaseYear}</div>
        </div>
        {!!relevantGenres?.length && (
          <div className={styles.relevantGenres}>{relevantGenres.join(GENRE_CONNECTOR)}</div>
        )}
      </Link>
      {showMenu && <ContextMenu movieId={id} onClose={handleCloseMenu} />}
    </div>
  );
};
