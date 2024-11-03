import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GenreSelect } from '../GenreSelect';
import styles from './GenreSelect.module.css';
import { renderWithRouter } from '../../../testUtils';
import { MemoryRouter } from 'react-router-dom';
import { genres } from '../../../constants';

describe('GenreSelect', () => {
  test('renders all genres', () => {
    renderWithRouter(<GenreSelect />);

    genres.forEach((genre) => {
      expect(screen.getByRole('button', { name: genre.label })).toBeInTheDocument();
    });
  });

  test('highlights selected genre', async () => {
    const selectedGenre = 'Horror';
    const newSelectedGenre = 'Comedy';
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={[`/?genre=${selectedGenre}`]}>
        <GenreSelect />
      </MemoryRouter>
    );

    const selectedButton = screen.getByRole('button', { name: selectedGenre });
    expect(selectedButton).toHaveClass(styles.selectedButton);
    expect(selectedButton).not.toHaveClass(styles.button);

    const newSelectedButton = screen.getByRole('button', { name: newSelectedGenre });
    await user.click(newSelectedButton);
    await waitFor(() => expect(newSelectedButton).toHaveClass(styles.selectedButton));
  });
});
