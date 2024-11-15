import { GenreSelect } from '../GenreSelect/GenreSelect';
import { MovieTile } from '../MovieTile/MovieTile';
import { SortControl } from '../SortControl/SortControl';
import styles from './Layout.module.css';

export function Layout({ movies, children, searchParams }) {
  return (
    <div className={styles.container}>
      <div className={styles.headerTile}>{children}</div>

      <div className={styles.movieListTile}>
        <div className={styles.filters}>
          <GenreSelect searchParams={searchParams} />
          <SortControl searchParams={searchParams} />
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
                searchParams={searchParams}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
