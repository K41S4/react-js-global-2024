import { fn } from '@storybook/test';

import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { Dialog } from '../../Components/Dialog/Dialog';
import { useState } from 'react';

const AddMovie = ({ onSubmit, genres }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDialogOpen(true)}>Open dialog</button>
      {isDialogOpen && (
        <Dialog title="Add movie" onClose={() => setIsDialogOpen(false)}>
          <MovieForm onSubmit={onSubmit} genres={genres} />
        </Dialog>
      )}
    </div>
  );
};

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
  },
};

export const AddMovieStory = {
  args: {
    genres: ['Horror', 'Crime'],
  },
};
