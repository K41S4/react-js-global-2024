import { render } from '@testing-library/react';
import { MovieDetails } from '../MovieDetails';
import { useLoaderData } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useLoaderData: jest.fn(),
}));

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
    useLoaderData.mockImplementation(() => testData);

    const { asFragment } = render(<MovieDetails />);

    expect(asFragment()).toMatchSnapshot();
  });
});
