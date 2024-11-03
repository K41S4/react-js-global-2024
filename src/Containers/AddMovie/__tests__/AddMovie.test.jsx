import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AddMovie } from '../AddMovie';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

jest.mock('../../../requests/requests', () => ({
  createMovie: jest.fn(),
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
});
