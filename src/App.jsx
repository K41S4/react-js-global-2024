import { MovieListPage } from './Containers/MovieListPage/MovieListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { fetchMovie } from './requests/requests';
import { SearchForm } from './Components/SearchForm/SearchForm';
import { MovieDetails } from './Components/MovieDetails/MovieDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    children: [
      {
        path: '/',
        element: <SearchForm />,
      },
      {
        path: '/:movieId',
        element: <MovieDetails />,
        loader: ({ params }) => fetchMovie(params.movieId),
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
