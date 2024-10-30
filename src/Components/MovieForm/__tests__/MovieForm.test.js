import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MovieForm } from '../MovieForm';

describe('MovieForm', () => {
  it('allows entering values into form fields', async () => {
    const user = userEvent.setup();
    const movieDetails = {
      title: 'Test title',
      releaseYear: '1999',
      imageUrl: 'http://image',
      rating: '9',
      genre: 'Action',
      runtime: '1h',
      description: 'Test description',
    };
    const mockSubmit = jest.fn();

    render(<MovieForm onSubmit={mockSubmit} genres={['Action']} />);

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
    await user.type(ratingInput, movieDetails.rating);
    await user.selectOptions(genreInput, movieDetails.genre);
    await user.type(runtimeInput, movieDetails.runtime);
    await user.type(descriptionTextarea, movieDetails.description);

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(mockSubmit).toHaveBeenCalledWith(movieDetails);
  });

  it('handles submit event with default values', async () => {
    const user = userEvent.setup();
    const mockSubmit = jest.fn();

    render(<MovieForm onSubmit={mockSubmit} genres={['']} />);

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(mockSubmit).toHaveBeenCalledWith({
      title: '',
      releaseYear: '',
      imageUrl: '',
      rating: '',
      genre: '',
      runtime: '',
      description: '',
    });
  });

  it('resets the form when reset button is clicked', async () => {
    const user = userEvent.setup();

    render(<MovieForm onSubmit={jest.fn()} genres={[]} />);

    const titleInput = screen.getByLabelText('Title');

    await user.type(titleInput, 'test');
    expect(titleInput).toHaveValue('test');

    await user.click(screen.getByRole('button', { name: 'Reset' }));
    expect(titleInput).toHaveValue('');
  });

  it('sets initial form values', async () => {
    const genres = ['Action', 'Drama', 'Comedy'];
    const user = userEvent.setup();
    const mockSubmit = jest.fn();

    const movieDetails = {
      title: 'Test title',
      releaseYear: '1999',
      imageUrl: 'http://image',
      rating: '9',
      genre: 'Action',
      runtime: '1h',
      description: 'Test description',
    };

    render(<MovieForm initialValues={movieDetails} onSubmit={mockSubmit} genres={genres} />);
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(mockSubmit).toHaveBeenCalledWith(movieDetails);
  });
});
