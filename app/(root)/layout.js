'use client';

import { genreParamName, queryParamName, sortParamName } from '../../src/constants.js';
import { fetchMovies } from '../../src/requests/requests.js';
import { Layout } from '../../src/Components/Layout/Layout.jsx';
import { useSearchParams } from 'next/navigation.js';

export default async function LayoutPage({ children }) {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get(queryParamName);
  const sortParam = searchParams.get(sortParamName);
  const qenreParam = searchParams.get(genreParamName);
  const movies = await fetchMovies(queryParam, sortParam, qenreParam);

  return <Layout movies={movies}>{children}</Layout>;
}
