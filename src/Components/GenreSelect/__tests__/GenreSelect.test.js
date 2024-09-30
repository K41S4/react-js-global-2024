import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GenreSelect } from '../GenreSelect';
import styles from './GenreSelect.module.css';

describe('GenreSelect', () => {
  test('all genres are rendered', () => {
    const genres = ['test1', 'test2', 'test3'];

    render(<GenreSelect allGenres={genres} selectedGenre={'test1'} onSelect={jest.fn()} />);

    genres.forEach((genre) => {
      expect(screen.getByRole('button', { name: genre })).toBeInTheDocument();
    });
  });

  test('selected genre is highlighted', () => {
    const selectedGenre = 'test1';
    const onSelectMock = jest.fn();

    render(
      <GenreSelect allGenres={['test1', 'test2', 'test3']} selectedGenre={selectedGenre} onSelect={onSelectMock} />
    );

    const selectedButton = screen.getByRole('button', { name: selectedGenre });
    expect(selectedButton).toHaveClass(styles.selectedButton);
    expect(selectedButton).not.toHaveClass(styles.button);
  });

  test('onSearch callback is called with proper value when search button is clicked', async () => {
    const user = userEvent.setup();
    const onSelectMock = jest.fn();
    const genreToSelect = 'test2';
    render(<GenreSelect allGenres={['test1', 'test2', 'test3']} selectedGenre={'test1'} onSelect={onSelectMock} />);

    await user.click(screen.getByRole('button', { name: genreToSelect }));

    expect(onSelectMock).toHaveBeenCalledWith(genreToSelect);
  });
});
