import { screen, waitFor } from '@testing-library/react';
import { MovieTile } from '../MovieTile';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
import { renderWithRouter } from '../../../testUtils';

describe('MovieTile', () => {
  test('renders all details', () => {
    const testData = {
      id: '123',
      imageUrl: 'imageUrl',
      title: 'testName',
      releaseYear: 'testYear',
      relevantGenres: ['genre1', 'genre2'],
    };

    const { asFragment } = renderWithRouter(<MovieTile {...testData} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with required props', () => {
    const testData = {
      id: '123',
      imageUrl: 'imageUrl',
      title: 'testName',
      releaseYear: 'testYear',
    };

    const { asFragment } = renderWithRouter(<MovieTile {...testData} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('navigates to movie id url on container click', async () => {
    const defaultProps = {
      id: '123',
      imageUrl: 'imageUrl',
      title: 'testName',
      releaseYear: 'testYear',
      relevantGenres: ['genre1', 'genre2'],
    };

    const user = userEvent.setup();

    renderWithRouter(
      <Routes>
        <Route path="/" element={<MovieTile {...defaultProps} />} />
        <Route path="/123" element={<h1>Movie Page</h1>} />
      </Routes>
    );

    await user.click(screen.getByRole('link'));

    expect(screen.getByText('Movie Page')).toBeInTheDocument();
  });

  test('opens context menu on container right click', async () => {
    const defaultProps = {
      id: '123',
      imageUrl: 'imageUrl',
      title: 'testName',
      releaseYear: 'testYear',
      relevantGenres: ['genre1', 'genre2'],
    };

    const user = userEvent.setup();

    const { container } = renderWithRouter(<MovieTile {...defaultProps} />);

    await user.pointer(
      { keys: '[MouseRight]', target: container.firstElementChild },
      { keys: '[/MouseRight]', target: container.firstElementChild }
    );

    waitFor(() => expect(screen.getByText('Edit')).toBeInTheDocument());
  });
});
