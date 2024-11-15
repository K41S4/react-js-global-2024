'use client';
import { useParams } from 'next/navigation';
import { MovieDetails } from '../../../../src/Components/MovieDetails/MovieDetails';
import { EditMovie } from '../../../../src/Containers/EditMovie/EditMovie';
import { fetchMovie } from '../../../../src/requests/requests';
import { Suspense } from 'react';

export default async function EditMoviePage() {
  const params = useParams();
  const movie = await fetchMovie(params.movieId);

  return (
    <Suspense>
      <EditMovie movie={movie} />
      <MovieDetails movie={movie} />
    </Suspense>
  );
}
