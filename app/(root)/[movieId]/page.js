import { MovieDetails } from '../../../src/Components/MovieDetails/MovieDetails';
import { fetchMovie, fetchMovies } from '../../../src/requests/requests';
import Link from 'next/link';
import styles from '../styles.module.css';
import { Layout } from '../../../src/Components/Layout/Layout';
import { genreParamName, queryParamName, sortParamName } from '../../../src/constants';
import { getSearchParamsString } from '../../../src/utils';

export default async function MovieDetailPage({ params, searchParams }) {
  const searchParamsResult = await searchParams;
  const movies = await fetchMovies(
    searchParamsResult[queryParamName],
    searchParamsResult[sortParamName],
    searchParamsResult[genreParamName]
  );

  const href = `/?${getSearchParamsString(await searchParams)}`;
  const movieId = (await params).movieId;
  const movie = await fetchMovie(movieId);
  return (
    <Layout movies={movies} searchParams={searchParamsResult}>
      <Link className={styles.headerButton} href={href}>
        Search
      </Link>
      <MovieDetails movie={movie} />
    </Layout>
  );
}
