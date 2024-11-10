import { Layout } from '../src/Components/Layout/Layout.jsx';
import { SearchForm } from '../src/Components/SearchForm/SearchForm.jsx';
import { genreParamName, queryParamName, sortParamName } from '../src/constants.js';
import { AddMovie } from '../src/Containers/AddMovie/AddMovie.jsx';
import { fetchMovies } from '../src/requests/requests.js';

export async function getServerSideProps({ query }) {
  const queryParam = query[queryParamName] || '';
  const sortParam = query[sortParamName] || '';
  const qenreParam = query[genreParamName] || '';
  const movies = await fetchMovies(queryParam, sortParam, qenreParam);

  return {
    props: {
      movies: movies,
    },
  };
}

export default function NewMoviePage({ movies }) {
  return (
    <Layout movies={movies}>
      <AddMovie />
      <SearchForm />
    </Layout>
  );
}
