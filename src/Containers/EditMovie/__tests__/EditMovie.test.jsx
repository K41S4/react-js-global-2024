import { MemoryRouter, Route, Routes, useLoaderData } from 'react-router-dom';
import { EditMovie } from '../EditMovie';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

jest.mock('../../../requests/requests', () => ({
  createMovie: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(),
}));

describe('Edit movie', () => {
  test('navigates to the movie details on close', async () => {
    const user = userEvent.setup();
    useLoaderData.mockImplementation(() => {
      return { id: '123', genres: ['Horror'] };
    });

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
});
