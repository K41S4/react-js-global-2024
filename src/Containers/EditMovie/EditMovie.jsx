import { redirect } from 'next/navigation';
import { Dialog } from '../../Components/Dialog/Dialog';
import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { updateMovie } from '../../requests/requests';
import { getSearchParamsString } from '../../utils';

export const EditMovie = async ({ movie, searchParams }) => {
  const handleSubmit = async (movieToUpdate) => {
    await updateMovie({ ...movieToUpdate, id: movie.id });
    redirect(`/${movie.id}?${getSearchParamsString(searchParams)}`);
  };

  return (
    <Dialog title="Edit movie" onClose={() => redirect(`/${movie.id}?${getSearchParamsString(searchParams)}`)}>
      <MovieForm onSubmit={handleSubmit} initialValues={{ ...movie, genre: movie.genres[0] }} />
    </Dialog>
  );
};
