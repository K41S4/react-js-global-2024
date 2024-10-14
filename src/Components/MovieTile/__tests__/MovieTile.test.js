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

    const { asFragment } = render(<MovieTile {...testData} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with required props', () => {
    const testData = {
      imageUrl: 'imageUrl',
      movieName: 'testName',
      releaseYear: 'testYear',
    };

    const { asFragment } = render(<MovieTile {...testData} />);

    expect(asFragment()).toMatchSnapshot();
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

    const { container } = render(<MovieTile {...defaultProps} onClick={onClickMock} />);

    await user.click(container.firstElementChild);

    expect(onClickMock).toHaveBeenCalled();
  });
});
