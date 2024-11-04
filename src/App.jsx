import { MovieListPage } from './Containers/MovieListPage/MovieListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { fetchMovie } from './requests/requests';
import { AddMovie } from './Containers/AddMovie/AddMovie';
import { EditMovie } from './Containers/EditMovie/EditMovie';
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
        children: [
          {
            path: '/new',
            element: <AddMovie />,
          },
        ],
      },
      {
        path: '/:movieId',
        element: <MovieDetailsContainer />,
        loader: ({ params }) => fetchMovie(params.movieId),
        children: [
          {
            path: '/:movieId/edit',
            element: <EditMovie />,
            loader: ({ params }) => fetchMovie(params.movieId),
          },
        ],
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
