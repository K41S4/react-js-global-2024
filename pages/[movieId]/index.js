import { useRouter } from 'next/router';
import { genreParamName, queryParamName, sortParamName } from '../../src/constants';
import { Layout } from '../../src/Components/Layout/Layout';
import { MovieDetails } from '../../src/Components/MovieDetails/MovieDetails';
import { fetchMovie, fetchMovies } from '../../src/requests/requests';
import Link from 'next/link';
import styles from '../styles.module.css';

export async function getServerSideProps({ query }) {
  const queryParam = query[queryParamName] || '';
  const sortParam = query[sortParamName] || '';
  const genreParam = query[genreParamName] || '';
  const movieId = query.movieId;
  const movies = await fetchMovies(queryParam, sortParam, genreParam);
  const movie = await fetchMovie(movieId);

  return {
    props: {
      movies: movies,
      movie: movie,
    },
  };
}

export default function MovieDetailPage({ movies, movie }) {
  const router = useRouter();
  const params = new URLSearchParams(router.query);
  params.delete('movieId');
  const href = `/?${params.toString()}`;

  return (
    <Layout movies={movies}>
      <Link className={styles.headerButton} href={href}>
        Search
      </Link>
      <MovieDetails movie={movie} />
    </Layout>
  );
}
