'use client';
import { redirect, useSearchParams } from 'next/navigation';
import { Dialog } from '../../Components/Dialog/Dialog';
import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { updateMovie } from '../../requests/requests';

export const EditMovie = ({ movie }) => {
  const searchParams = useSearchParams();

  const handleSubmit = async (movieToUpdate) => {
    await updateMovie({ ...movieToUpdate, id: movie.id });
    redirect(`/${movie.id}?${searchParams.toString()}`);
  };

  return (
    <Dialog title="Edit movie" onClose={() => redirect(`/${movie.id}?${searchParams.toString()}`)}>
      <MovieForm onSubmit={handleSubmit} initialValues={{ ...movie, genre: movie.genres[0] }} />
    </Dialog>
  );
};
