import { GenreSelect } from '../../Components/GenreSelect/GenreSelect';
import { genres, sortOptions } from '../../constants';
import { MovieTile } from '../../Components/MovieTile/MovieTile';
import { SortControl } from '../../Components/SortControl/SortControl';
import styles from './MovieListPage.module.css';
import { useFetchMovies } from '../../customHooks/moviesHooks';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

const defaultQuery = {
  search: '',
  genre: genres[0],
  sortBy: sortOptions[0].value,
};

export function MovieListPage() {
  const [searchParams, setSearchParams] = useSearchParams(defaultQuery);
  const navigate = useNavigate();

  const movies = useFetchMovies(searchParams.get('search'), searchParams.get('sortBy'), searchParams.get('genre'));

  const handleMovieSelect = (movieId) => {
    navigate(`/${movieId}?${searchParams.toString()}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerTile}>
        <Outlet />
      </div>

      <div className={styles.movieListTile}>
        <div className={styles.filters}>
          <GenreSelect
            allGenres={genres}
            selectedGenre={searchParams.get('genre')}
            onSelect={(genre) =>
              setSearchParams((params) => {
                params.set('genre', genre);
                return params;
              })
            }
          />
          <SortControl
            selectedOption={searchParams.get('sortBy')}
            onSelect={(value) =>
              setSearchParams((params) => {
                params.set('sortBy', value);
                return params;
              })
            }
          />
        </div>

        <div className={styles.movieList}>
          {!!movies?.length &&
            movies.map((movieData) => (
              <MovieTile
                key={movieData.movieId}
                id={movieData.movieId}
                imageUrl={movieData.imageUrl}
                movieName={movieData.movieName}
                releaseYear={movieData.releaseYear}
                relevantGenres={movieData.genres}
                onClick={() => handleMovieSelect(movieData.movieId)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
