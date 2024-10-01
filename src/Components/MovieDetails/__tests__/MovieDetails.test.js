import { render, screen } from '@testing-library/react';
import { MovieDetails } from '../MovieDetails';

describe('MovieDetails', () => {
  test('renders all details', () => {
    const testData = {
      imageUrl: 'imageUrl',
      movieName: 'testName',
      releaseYear: 'testYear',
      rating: 'testRating',
      duration: 'testDuration',
      description: 'testDescription',
    };

    render(<MovieDetails {...testData} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', testData.imageUrl);
    expect(screen.getByText(testData.movieName)).toBeInTheDocument();
    expect(screen.getByText(testData.releaseYear)).toBeInTheDocument();
    expect(screen.getByText(testData.rating)).toBeInTheDocument();
    expect(screen.getByText(testData.duration)).toBeInTheDocument();
    expect(screen.getByText(testData.description)).toBeInTheDocument();
  });
});
