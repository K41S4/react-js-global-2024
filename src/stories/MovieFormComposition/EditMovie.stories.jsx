import { fn } from '@storybook/test';

import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { Dialog } from '../../Components/Dialog/Dialog';
import { useState } from 'react';

const EditMovie = ({ movie, onSubmit, genres }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDialogOpen(true)}>Open dialog</button>
      {isDialogOpen && (
        <Dialog title="Edit movie" onClose={() => setIsDialogOpen(false)}>
          <MovieForm initialValues={movie} onSubmit={onSubmit} genres={genres} />
        </Dialog>
      )}
    </div>
  );
};

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
