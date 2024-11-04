import { fn } from '@storybook/test';

import { MovieForm } from '../../Components/MovieForm/MovieForm';

export default {
  title: 'Example/MovieForm',
  component: MovieForm,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  args: {
    onSubmit: fn(),
  },
};

export const MovieFormDefault = {
  args: {
    genres: ['All', 'Horror', 'Crime'],
    initialValues: {
      title: '',
      releaseYear: '',
      imageUrl: '',
      rating: '',
      genre: '',
      runtime: '',
      description: '',
    },
  },
};
