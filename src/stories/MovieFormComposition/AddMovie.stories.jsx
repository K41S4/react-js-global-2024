import { fn } from '@storybook/test';

import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { Dialog } from '../../Components/Dialog/Dialog';

const AddMovie = ({ movie, onSubmit, onClose, genres }) => (
  <Dialog title={'Add movie'} onClose={onClose}>
    <MovieForm initialValues={movie} onSubmit={onSubmit} genres={genres} />
  </Dialog>
);

export default {
  title: 'Composition/AddMovie',
  component: AddMovie,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  args: {
    onSubmit: fn(),
    onClose: fn(),
  },
};

export const AddMovieStory = {
  args: {
    genres: ['Horror', 'Crime'],
    movie: {
      title: '',
      releaseDate: '',
      imageUrl: '',
      rating: '',
      genre: '',
      runtime: '',
      description: '',
    },
  },
};
