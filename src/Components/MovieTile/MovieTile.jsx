import { GENRE_CONNECTOR } from '../../constants';
import styles from './MovieTile.module.css';
import { ContextMenu } from '../ContextMenu/ContextMenu';
import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export const MovieTile = ({ id, imageUrl, title, releaseYear, relevantGenres }) => {
  const searchParams = useSearchParams();
  const href = `/${id}?${searchParams.toString()}`;
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
      <Link className={styles.link} href={href} data-cy="movie-tile" onContextMenu={handleOpenMenu}>
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
