import { Dialog } from '../../Components/Dialog/Dialog';
import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { updateMovie } from '../../requests/requests';

export const EditMovie = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const movie = useLoaderData();

  const handleSubmit = async (movieToUpdate) => {
    console.log(movie);
    await updateMovie({ ...movieToUpdate, id: movie.id });
    navigate(`/${movie.id}?${searchParams.toString()}`);
  };

  return (
    <>
      <Dialog title="Edit movie" onClose={() => navigate(`/${movie.id}?${searchParams.toString()}`)}>
        <MovieForm onSubmit={handleSubmit} initialValues={{ ...movie, genre: movie.genres[0] }} />
      </Dialog>
    </>
  );
};
