import { render, screen } from '@testing-library/react';
import { MovieTile } from '../MovieTile';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('MovieTile', () => {
  test('renders all details', () => {
    const testData = {
      id: '123',
      imageUrl: 'imageUrl',
      title: 'testName',
      releaseYear: 'testYear',
      relevantGenres: ['genre1', 'genre2'],
    };

    const { asFragment } = render(<MovieTile {...testData} />, { wrapper: BrowserRouter });

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with required props', () => {
    const testData = {
      id: '123',
      imageUrl: 'imageUrl',
      title: 'testName',
      releaseYear: 'testYear',
    };

    const { asFragment } = render(<MovieTile {...testData} />, { wrapper: BrowserRouter });

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

    const { container } = render(
      <Routes>
        <Route path="/" element={<MovieTile {...defaultProps} />} />
        <Route path="/123" element={<h1>Movie Page</h1>} />
      </Routes>,
      { wrapper: BrowserRouter }
    );

    await user.click(container.firstElementChild);

    expect(screen.getByText('Movie Page')).toBeInTheDocument();
  });
});
