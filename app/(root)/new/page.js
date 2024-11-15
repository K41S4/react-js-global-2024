'use client';
import { SearchForm } from '../../../src/Components/SearchForm/SearchForm';
import { AddMovie } from '../../../src/Containers/AddMovie/AddMovie';
import { Layout } from '../../../src/Components/Layout/Layout';
import { fetchMovies } from '../../../src/requests/requests';
import { genreParamName, queryParamName, sortParamName } from '../../../src/constants';

export default async function NewMoviePage({ searchParams }) {
  const searchParamsResult = await searchParams;
  const movies = await fetchMovies(
    searchParamsResult[queryParamName],
    searchParamsResult[sortParamName],
    searchParamsResult[genreParamName]
  );

  return (
    <Layout movies={movies} searchParams={searchParamsResult}>
      <AddMovie searchParams={searchParamsResult} />
      <SearchForm searchParams={searchParamsResult} />
    </Layout>
  );
}
