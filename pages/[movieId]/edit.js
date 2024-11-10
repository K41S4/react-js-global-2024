import { Layout } from '../../src/Components/Layout/Layout';
import { MovieDetails } from '../../src/Components/MovieDetails/MovieDetails';
import { genreParamName, queryParamName, sortParamName } from '../../src/constants';
import { EditMovie } from '../../src/Containers/EditMovie/EditMovie';
import { fetchMovie, fetchMovies } from '../../src/requests/requests';

export async function getServerSideProps({ query }) {
  const queryParam = query[queryParamName] || '';
  const sortParam = query[sortParamName] || '';
  const qenreParam = query[genreParamName] || '';
  const movieId = query.movieId;
  const movies = await fetchMovies(queryParam, sortParam, qenreParam);
  const movie = await fetchMovie(movieId);

  return {
    props: {
      movies: movies,
      movie: movie,
    },
  };
}

export default function EditMoviePage({ movies, movie }) {
  return (
    <Layout movies={movies}>
      <EditMovie movie={movie} />
      <MovieDetails movie={movie} />
    </Layout>
  );
}
