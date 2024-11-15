'use client';

import { Dialog } from '../../Components/Dialog/Dialog';
import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { createMovie } from '../../requests/requests';
import { redirect, useSearchParams } from 'next/navigation';

export const AddMovie = () => {
  const searchParams = useSearchParams();

  const handleSubmit = async (movie) => {
    const createdMovieId = await createMovie(movie);
    redirect(`/${createdMovieId}?${searchParams.toString()}`);
  };

  return (
    <Dialog title="Add movie" onClose={() => redirect(`/?${searchParams.toString()}`)}>
      <MovieForm onSubmit={handleSubmit} />
    </Dialog>
  );
};
