import styles from './MovieDetails.module.css';

export const MovieDetails = ({ movie }) => {
  return (
    <div className={styles.container}>
      <img src={movie.imageUrl} alt="" className={styles.image} />
      <div>
        <div className={styles.headerContainer}>
          <h2 className={styles.title}>{movie.title}</h2>
          <span className={styles.rating}>{movie.rating}</span>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.releaseYear}>{movie.releaseYear}</div>
          <div className={styles.runtime}>{movie.runtime}</div>
        </div>
        <div className={styles.description}>{movie.description}</div>
      </div>
    </div>
  );
};
