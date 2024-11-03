import { GenreSelect } from '../../Components/GenreSelect/GenreSelect';
import { formGenres, qenreParamName, queryParamName, sortParamName } from '../../constants';
import { MovieTile } from '../../Components/MovieTile/MovieTile';
import { SortControl } from '../../Components/SortControl/SortControl';
import styles from './MovieListPage.module.css';
import { useFetchMovies } from '../../customHooks/moviesHooks';
import { Link, Outlet, useMatch, useSearchParams } from 'react-router-dom';
import { Dialog } from '../../Components/Dialog/Dialog';
import { MovieForm } from '../../Components/MovieForm/MovieForm';
import { useState } from 'react';

export function MovieListPage() {
  const [searchParams] = useSearchParams();
  const isMovieIdPath = useMatch('/:movieId');

  const movies = useFetchMovies(
    searchParams.get(queryParamName),
    searchParams.get(sortParamName),
    searchParams.get(qenreParamName)
  );
  const [isAddMovieDialogOpen, setIsAddMovieDialogOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.headerTile}>
        {isMovieIdPath ? (
          <Link className={styles.headerButton} to={`/?${searchParams.toString()}`}>
            Search
          </Link>
        ) : (
          <>
            <button className={styles.headerButton} onClick={() => setIsAddMovieDialogOpen(true)}>
              Add movie
            </button>
            {isAddMovieDialogOpen && (
              <Dialog title="Add movie" onClose={() => setIsAddMovieDialogOpen(false)}>
                <MovieForm genres={formGenres} onSubmit={(value) => console.log(value)} />
              </Dialog>
            )}
          </>
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
                key={movieData.movieId}
                id={movieData.movieId}
                imageUrl={movieData.imageUrl}
                movieName={movieData.movieName}
                releaseYear={movieData.releaseYear}
                relevantGenres={movieData.genres}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
