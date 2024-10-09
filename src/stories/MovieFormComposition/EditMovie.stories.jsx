import { fn } from '@storybook/test';

import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { Dialog } from '../../Components/Dialog/Dialog';

const EditMovie = ({ movie, onSubmit, onClose, genres }) => (
  <Dialog title={'Add movie'} onClose={onClose}>
    <MovieForm initialValues={movie} onSubmit={onSubmit} genres={genres} />
  </Dialog>
);

export default {
  title: 'Composition/EditMovie',
  component: EditMovie,
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

export const EditMovieStory = {
  args: {
    genres: ['Comedy', 'Horror', 'Crime'],
    movie: {
      title: 'Movie title',
      releaseDate: '1999',
      imageUrl: 'https://image.jpg',
      rating: '7.7',
      genre: 'Crime',
      runtime: '4h 15min',
      description: 'Sample text',
    },
  },
};
