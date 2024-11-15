'use client';
import { MovieDetails } from '../../../src/Components/MovieDetails/MovieDetails';
import { fetchMovie } from '../../../src/requests/requests';
import Link from 'next/link';
import styles from '../styles.module.css';
import { Suspense } from 'react';

export default async function MovieDetailPage({ params, searchParams }) {
  const href = `/?${(await searchParams).toString()}`;
  const movieId = (await params).movieId;
  const movie = await fetchMovie(movieId);
  return (
    <Suspense>
      <Link className={styles.headerButton} href={href}>
        Search
      </Link>
      <MovieDetails movie={movie} />
    </Suspense>
  );
}
