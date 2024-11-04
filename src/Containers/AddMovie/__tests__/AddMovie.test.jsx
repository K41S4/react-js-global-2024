import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AddMovie } from '../AddMovie';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { createMovie } from '../../../requests/requests';

jest.mock('../../../requests/requests', () => ({
  createMovie: jest.fn(),
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

describe('Add movie', () => {
  test('navigates to the root on close', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/new']}>
        <Routes>
          <Route path="/new" element={<AddMovie />} />
          <Route path="/:movieId" element={<div>Created</div>} />
          <Route path="/" element={<div>Closed</div>} />
        </Routes>
      </MemoryRouter>
    );

    user.click(screen.getByText('x'));

    await waitFor(() => expect(screen.getByText('Closed')).toBeInTheDocument());
  });

  test('calls create movie on submit', async () => {
    const user = userEvent.setup();
    const mockCreateMovie = jest.fn().mockReturnValue(123);
    createMovie.mockImplementation(mockCreateMovie);

    render(
      <MemoryRouter initialEntries={['/new']}>
        <Routes>
          <Route path="/new" element={<AddMovie />} />
          <Route path="/:movieId" element={<div>Created</div>} />
          <Route path="/" element={<div>Closed</div>} />
        </Routes>
      </MemoryRouter>
    );

    user.click(screen.getByText('Submit'));

    await waitFor(() => expect(mockCreateMovie).toHaveBeenCalled());
    await waitFor(() => expect(screen.getByText('Created')).toBeInTheDocument());
  });
});
