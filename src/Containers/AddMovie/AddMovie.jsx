import { Dialog } from '../../Components/Dialog/Dialog';
import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { createMovie } from '../../requests/requests';
import { redirect } from 'next/navigation';
import { getSearchParamsString } from '../../utils';

export const AddMovie = async ({ searchParams }) => {
  const handleSubmit = async (movie) => {
    const createdMovieId = await createMovie(movie);
    redirect(`/${createdMovieId}?${getSearchParamsString(searchParams)}`);
  };

  return (
    <Dialog title="Add movie" onClose={() => redirect(`/?${getSearchParamsString(searchParams)}`)}>
      <MovieForm onSubmit={handleSubmit} />
    </Dialog>
  );
};
