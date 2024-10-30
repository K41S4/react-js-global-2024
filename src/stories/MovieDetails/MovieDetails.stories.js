import { MovieDetails } from '../../Components/MovieDetails/MovieDetails';

export default {
  title: 'Example/MovieDetails',
  component: MovieDetails,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
};

export const MovieDetailsDefault = {
  args: {
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg',
    title: 'Pulp Fiction',
    releaseYear: '1999',
    rating: '9.0',
    runtime: '2h 14min',
    description: 'Description',
  },
};
