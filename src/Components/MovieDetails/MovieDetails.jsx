import styles from './MovieDetails.module.css';

export const MovieDetails = ({ imageUrl, movieName, releaseYear, rating, duration, description }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={`${movieName}`} className={styles.img} />
      <div>
        <div className={styles.movieName}>
          {movieName} <span className={styles.rating}>{rating}</span>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.releaseYear}>{releaseYear}</div>
          <div className={styles.duration}>{duration}</div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
