import { fn } from '@storybook/test';
import { MovieTile } from '../../Components/MovieTile/MovieTile';

export default {
  title: 'Example/MovieTile',
  component: MovieTile,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    onClick: fn(),
  },
  tags: ['autodocs'],
};

export const MovieTileDefault = {
  args: {
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg',
    movieName: 'Pulp Fiction',
    releaseYear: '1999',
    relevantGenres: ['Crime', 'Comedy'],
  },
};
