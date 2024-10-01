import { render, screen } from '@testing-library/react';
import { MovieTile } from '../MovieTile';
import userEvent from '@testing-library/user-event';

describe('MovieTile', () => {
  test('renders all details', () => {
    const testData = {
      imageUrl: 'imageUrl',
      movieName: 'testName',
      releaseYear: 'testYear',
      relevantGenres: ['genre1', 'genre2'],
    };

    render(<MovieTile {...testData} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', testData.imageUrl);
    expect(screen.getByText(testData.movieName)).toBeInTheDocument();
    expect(screen.getByText(testData.releaseYear)).toBeInTheDocument();
    expect(screen.getByText('genre1 & genre2')).toBeInTheDocument();
  });

  test('renders without throwing an exception with undefined relevant genres', () => {
    const testData = {
      imageUrl: 'imageUrl',
      movieName: 'testName',
      releaseYear: 'testYear',
      relevantGenres: undefined,
    };

    expect(() => {
      render(<MovieTile {...testData} />);
    }).not.toThrow();
  });

  test('calls onClick callback on container click', async () => {
    const defaultProps = {
      imageUrl: 'imageUrl',
      movieName: 'testName',
      releaseYear: 'testYear',
      relevantGenres: ['genre1', 'genre2'],
    };
    const onClickMock = jest.fn();
    const user = userEvent.setup();

    render(<MovieTile {...defaultProps} onClick={onClickMock} />);

    await user.click(screen.getByRole('img').closest('div'));

    expect(onClickMock).toHaveBeenCalled();
  });
});
