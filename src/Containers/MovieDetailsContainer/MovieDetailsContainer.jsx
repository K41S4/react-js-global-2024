import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { MovieDetails } from '../../Components/MovieDetails/MovieDetails';
import styles from './MovieDetailsContainer.module.css';

export const MovieDetailsContainer = () => {
  const movie = useLoaderData();
  const [searchParams] = useSearchParams();

  return (
    <>
      <MovieDetails {...movie} />
      <Link className={styles.headerLink} to={`/?${searchParams.toString()}`}>
        Search
      </Link>
    </>
  );
};
