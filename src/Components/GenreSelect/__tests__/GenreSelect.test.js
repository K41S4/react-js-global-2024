import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { GenreSelect } from '../GenreSelect';
import styles from './GenreSelect.module.css';

describe('GenreSelect tests', () => {
  const onSelectMock = jest.fn();
  const genres = ['test1', 'test2', 'test3'];
  const selectedGenre = 'test1';

  test('all genres are rendered', async () => {
    // Arrange
    // Act
    render(<GenreSelect allGenres={genres} selectedGenre={selectedGenre} onSelect={onSelectMock} />);

    // Assert
    genres.forEach((genre) => {
      expect(screen.getByRole('button', { name: genre })).toBeInTheDocument();
    });
  });

  test('selected genre is highlighted', async () => {
    // Arrange
    // Act
    render(<GenreSelect allGenres={genres} selectedGenre={selectedGenre} onSelect={onSelectMock} />);

    // Assert
    const selectedButton = screen.getByRole('button', { name: selectedGenre });
    expect(selectedButton).toHaveClass(styles.selectedButton);
    expect(selectedButton).not.toHaveClass(styles.button);
  });

  test('onSearch callback is called with proper value when search button is clicked', async () => {
    // Arrange
    const user = userEvent.setup();
    const genreToSelect = 'test2';
    render(<GenreSelect allGenres={genres} selectedGenre={selectedGenre} onSelect={onSelectMock} />);

    // Act
    await user.click(screen.getByRole('button', { name: genreToSelect }));

    // Assert
    expect(onSelectMock).toHaveBeenCalledWith(genreToSelect);
  });
});
