import { Dialog } from '../../Components/Dialog/Dialog';
import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { createMovie } from '../../requests/requests';
import { useRouter } from 'next/router';

export const AddMovie = () => {
  const router = useRouter();

  const handleSubmit = async (movie) => {
    const createdMovieId = await createMovie(movie);
    router.push({ pathname: `/${createdMovieId}`, query: router.query });
  };

  return (
    <Dialog title="Add movie" onClose={() => router.push({ pathname: '/', query: router.query })}>
      <MovieForm onSubmit={handleSubmit} />
    </Dialog>
  );
};
