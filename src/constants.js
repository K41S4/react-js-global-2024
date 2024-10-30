export const movieData = {
  imageUrl:
    'https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg',
  movieName: 'Pulp Fiction',
  releaseYear: '1994',
  rating: '8.9',
  duration: '2h 34min',
  description:
    'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents...',
  relevantGenres: ['Crime', 'Comedy'],
};

export const sortOptions = [
  { value: 'release_date', label: 'Release Date' },
  { value: 'title', label: 'Title' },
];

export const GENRE_CONNECTOR = ' & ';

export const queryParamName = 'query';
export const qenreParamName = 'genre';
export const sortParamName = 'sortBy';

export const formGenres = [
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Horror', label: 'Horror' },
  { value: 'Crime', label: 'Crime' },
];

export const genres = [{ value: '', label: 'All' }, ...formGenres];
