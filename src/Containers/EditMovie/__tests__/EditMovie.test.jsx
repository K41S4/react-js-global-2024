import { MemoryRouter, Route, Routes, useLoaderData } from 'react-router-dom';
import { EditMovie } from '../EditMovie';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { updateMovie } from '../../../requests/requests';

jest.mock('../../../requests/requests', () => ({
  updateMovie: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(),
}));
jest.mock('../../../Components/MovieForm/MovieForm', () => ({
  MovieForm: ({ onSubmit }) => {
    return (
      <div>
        Form<button onClick={onSubmit}>Submit</button>
      </div>
    );
  },
}));

describe('Edit movie', () => {
  beforeEach(() => {
    useLoaderData.mockImplementation(() => {
      return { id: '123', genres: ['Horror'] };
    });
  });
  test('navigates to the movie details on close', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/123/edit']}>
        <Routes>
          <Route path="/:movieId/edit" element={<EditMovie />} />
          <Route path="/:movieId" element={<div>Edited</div>} />
          <Route path="/" element={<div>Closed</div>} />
        </Routes>
      </MemoryRouter>
    );

    user.click(screen.getByText('x'));

    await waitFor(() => expect(screen.getByText('Edited')).toBeInTheDocument);
  });

  test('calls edit movie on submit', async () => {
    const user = userEvent.setup();
    const mockUpdateMovie = jest.fn();
    updateMovie.mockImplementation(mockUpdateMovie);

    render(
      <MemoryRouter initialEntries={['/123/edit']}>
        <Routes>
          <Route path="/:movieId/edit" element={<EditMovie />} />
          <Route path="/:movieId" element={<div>Edited</div>} />
          <Route path="/" element={<div>Closed</div>} />
        </Routes>
      </MemoryRouter>
    );

    user.click(screen.getByText('Submit'));

    await waitFor(() => expect(mockUpdateMovie).toHaveBeenCalled());
    await waitFor(() => expect(screen.getByText('Edited')).toBeInTheDocument());
  });
});
