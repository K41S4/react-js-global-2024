import { genreParamName, queryParamName, sortParamName } from '../src/constants.js';
import { Layout } from '../src/Components/Layout/Layout';
import { SearchForm } from '../src/Components/SearchForm/SearchForm';
import { useRouter } from 'next/router';
import { fetchMovies } from '../src/requests/requests.js';
import Link from 'next/link.js';
import styles from './styles.module.css';

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

export default function MovieListPage({ movies }) {
  const router = useRouter();
  const params = new URLSearchParams(router.query);
  const href = `/new?${params.toString()}`;

  return (
    <Layout movies={movies}>
      <Link className={styles.headerButton} href={href}>
        Add movie
      </Link>
      <SearchForm />
    </Layout>
  );
}
