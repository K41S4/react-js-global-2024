'use client';
import { MovieDetails } from '../../../../src/Components/MovieDetails/MovieDetails';
import { EditMovie } from '../../../../src/Containers/EditMovie/EditMovie';
import { fetchMovie, fetchMovies } from '../../../../src/requests/requests';
import { Layout } from '../../../../src/Components/Layout/Layout';
import { genreParamName, queryParamName, sortParamName } from '../../../../src/constants';

export default async function EditMoviePage({ params, searchParams }) {
  const searchParamsResult = await searchParams;
  const movies = await fetchMovies(
    searchParamsResult[queryParamName],
    searchParamsResult[sortParamName],
    searchParamsResult[genreParamName]
  );
  const movie = await fetchMovie((await params).movieId);

  return (
    <Layout movies={movies} searchParams={searchParamsResult}>
      <EditMovie movie={movie} searchParams={searchParams} />
      <MovieDetails movie={movie} />
    </Layout>
  );
}
