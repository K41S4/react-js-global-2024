import { render } from '@testing-library/react';
import { MovieDetails } from '../MovieDetails';

describe('MovieDetails', () => {
  test('renders all details', () => {
    const testData = {
      imageUrl: 'imageUrl',
      title: 'testName',
      releaseYear: 'testYear',
      rating: 'testRating',
      runtime: 'testDuration',
      description: 'testDescription',
    };

    const { asFragment } = render(<MovieDetails {...testData} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
