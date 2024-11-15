import Link from 'next/link.js';
import styles from './styles.module.css';
import { SearchForm } from '../../src/Components/SearchForm/SearchForm';
import { Layout } from '../../src/Components/Layout/Layout';
import { fetchMovies } from '../../src/requests/requests';
import { genreParamName, queryParamName, sortParamName } from '../../src/constants';
import { getSearchParamsString } from '../../src/utils';

export default async function MovieListPage({ searchParams }) {
  const searchParamsResult = await searchParams;
  const movies = await fetchMovies(
    searchParamsResult[queryParamName],
    searchParamsResult[sortParamName],
    searchParamsResult[genreParamName]
  );

  const href = `/new?${getSearchParamsString(searchParamsResult)}`;

  return (
    <Layout movies={movies} searchParams={searchParamsResult}>
      <Link className={styles.headerButton} href={href}>
        Add movie
      </Link>
      <SearchForm searchParams={searchParamsResult} />
    </Layout>
  );
}
