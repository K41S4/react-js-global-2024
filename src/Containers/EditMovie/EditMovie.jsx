import { Dialog } from '../../Components/Dialog/Dialog';
import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { updateMovie } from '../../requests/requests';
import { useRouter } from 'next/router';

export const EditMovie = ({ movie }) => {
  const router = useRouter();
  const params = new URLSearchParams(router.query);
  params.delete('movieId');

  const handleSubmit = async (movieToUpdate) => {
    await updateMovie({ ...movieToUpdate, id: movie.id });
    router.push({ pathname: `/${movie.id}`, query: `${params.toString()}` });
  };

  return (
    <Dialog title="Edit movie" onClose={() => router.push({ pathname: `/${movie.id}`, query: `${params.toString()}` })}>
      <MovieForm onSubmit={handleSubmit} initialValues={{ ...movie, genre: movie.genres[0] }} />
    </Dialog>
  );
};
