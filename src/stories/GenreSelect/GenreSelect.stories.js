import { fn } from '@storybook/test';

import { GenreSelect } from '../../Components/GenreSelect/GenreSelect';

export default {
  title: 'Example/GenreSelect',
  component: GenreSelect,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  args: {
    onSelect: fn(),
  },
};

export const GenreSelectDefault = {
  args: {
    allGenres: ['All', 'Horror', 'Crime'],
    selectedGenre: 'All',
  },
};
