import { GenreSelect } from '../../Components/GenreSelect/GenreSelect';
import { genreParamName, queryParamName, sortParamName } from '../../constants';
import { MovieTile } from '../../Components/MovieTile/MovieTile';
import { SortControl } from '../../Components/SortControl/SortControl';
import styles from './MovieListPage.module.css';
import { useFetchMovies } from '../../customHooks/moviesHooks';
import { Link, Outlet, useMatch, useSearchParams } from 'react-router-dom';

export function MovieListPage() {
  const [searchParams] = useSearchParams();
  const isMovieIdPath = useMatch('/:movieId');

  const movies = useFetchMovies(
    searchParams.get(queryParamName),
    searchParams.get(sortParamName),
    searchParams.get(genreParamName)
  );

  return (
    <div className={styles.container}>
      <div className={styles.headerTile}>
        {isMovieIdPath ? (
          <Link className={styles.headerButton} to={`/?${searchParams.toString()}`}>
            Search
          </Link>
        ) : (
          <Link className={styles.headerButton} to={`/new?${searchParams.toString()}`}>
            Add movie
          </Link>
        )}
        <Outlet />
      </div>

      <div className={styles.movieListTile}>
        <div className={styles.filters}>
          <GenreSelect />
          <SortControl />
        </div>

        <div className={styles.movieList}>
          {!!movies?.length &&
            movies.map((movieData) => (
              <MovieTile
                key={movieData.id}
                id={movieData.id}
                imageUrl={movieData.imageUrl}
                title={movieData.title}
                releaseYear={movieData.releaseYear}
                relevantGenres={movieData.genres}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
