import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MovieForm } from '../MovieForm';

describe('MovieForm', () => {
  it('submits valid values', async () => {
    const user = userEvent.setup();
    const movieDetails = {
      title: 'Test title',
      releaseYear: '1999-12-12',
      imageUrl: 'http://image',
      rating: 9,
      genre: 'Horror',
      runtime: 123,
      description: 'Test description',
    };
    const mockSubmit = jest.fn();

    render(<MovieForm onSubmit={mockSubmit} />);

    const titleInput = screen.getByLabelText('Title');
    const releaseYearInput = screen.getByLabelText('Release Date');
    const imageUrlInput = screen.getByLabelText('Image Url');
    const ratingInput = screen.getByLabelText('Rating');
    const genreInput = screen.getByLabelText('Genre');
    const runtimeInput = screen.getByLabelText('Runtime');
    const descriptionTextarea = screen.getByLabelText('Description');

    await user.type(titleInput, movieDetails.title);
    await user.type(releaseYearInput, movieDetails.releaseYear);
    await user.type(imageUrlInput, movieDetails.imageUrl);
    await user.type(ratingInput, movieDetails.rating.toString());
    await user.selectOptions(genreInput, movieDetails.genre);
    await user.type(runtimeInput, movieDetails.runtime.toString());
    await user.type(descriptionTextarea, movieDetails.description);

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => expect(mockSubmit).toHaveBeenCalledWith(movieDetails));
  });

  it('shows errors for invalid values', async () => {
    const user = userEvent.setup();
    const mockSubmit = jest.fn();

    render(<MovieForm onSubmit={mockSubmit} />);

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(mockSubmit).not.toHaveBeenCalled();
    const errors = [
      'Title is required',
      'Release date is required',
      'Image URL is required',
      'Genre is required',
      'Description is required',
    ];
    errors.forEach((error) => expect(screen.getByText(error)).toBeInTheDocument());
  });

  it('resets the form when reset button is clicked', async () => {
    const user = userEvent.setup();

    render(<MovieForm onSubmit={jest.fn()} />);

    const titleInput = screen.getByLabelText('Title');

    await user.type(titleInput, 'test');
    expect(titleInput).toHaveValue('test');

    await user.click(screen.getByRole('button', { name: 'Reset' }));
    expect(titleInput).toHaveValue('');
  });

  it('sets initial form values', async () => {
    const user = userEvent.setup();
    const mockSubmit = jest.fn();

    const movieDetails = {
      title: 'Test title',
      releaseYear: '1999-12-12',
      imageUrl: 'http://image',
      rating: 9,
      genre: 'Horror',
      runtime: 123,
      description: 'Test description',
    };

    render(<MovieForm initialValues={movieDetails} onSubmit={mockSubmit} />);
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(mockSubmit).toHaveBeenCalledWith(movieDetails);
  });
});
