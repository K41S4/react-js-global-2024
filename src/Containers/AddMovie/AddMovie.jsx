import { Dialog } from '../../Components/Dialog/Dialog';
import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { createMovie } from '../../requests/requests';

export const AddMovie = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = async (movie) => {
    const createdMovieId = await createMovie(movie);
    navigate(`/${createdMovieId}?${searchParams.toString()}`);
  };

  return (
    <Dialog title="Add movie" onClose={() => navigate(`/?${searchParams.toString()}`)}>
      <MovieForm onSubmit={handleSubmit} />
    </Dialog>
  );
};
