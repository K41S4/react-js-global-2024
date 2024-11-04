import { Outlet } from 'react-router-dom';
import { MovieDetails } from '../../Components/MovieDetails/MovieDetails';

export const MovieDetailsContainer = () => {
  return (
    <>
      <MovieDetails />
      <Outlet />
    </>
  );
};
