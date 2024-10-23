import { MovieListPage } from './Containers/MovieListPage/MovieListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { fetchMovie } from './requests/requests';
import { SearchFormContainer } from './Containers/SearchFormContainer/SearchFormContainer';
import { MovieDetailsContainer } from './Containers/MovieDetailsContainer/MovieDetailsContainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    children: [
      {
        path: '/',
        element: <SearchFormContainer />,
      },
      {
        path: '/:movieId',
        element: <MovieDetailsContainer />,
        loader: fetchMovie,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
