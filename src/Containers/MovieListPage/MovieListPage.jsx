import { useEffect, useState } from 'react';
import { GenreSelect } from '../../Components/GenreSelect/GenreSelect';
import { SearchForm } from '../../Components/SearchForm/SearchForm';
import { sortOptions } from '../../constants';
import { MovieDetails } from '../../Components/MovieDetails/MovieDetails';
import { MovieTile } from '../../Components/MovieTile/MovieTile';
import { SortControl } from '../../Components/SortControl/SortControl';
import { Dialog } from '../../Components/Dialog/Dialog';
import { MovieForm } from '../../Components/MovieForm/MovieForm';
import styles from './MovieListPage.module.css';
import { fetchMovies } from '../../requests/requests';

export function MovieListPage() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0].value);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const genres = ['All', 'Comedy', 'Horror', 'Crime'];

  const [isAddMovieDialogOpen, setIsAddMovieDialogOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      const movies = await fetchMovies(searchQuery, selectedSortOption, selectedGenre, controller);
      setMovies(movies);
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [searchQuery, selectedSortOption, selectedGenre, setMovies]);

  return (
    <div>
      <div className={styles.headerTile}>
        {selectedMovie ? (
          <>
            <MovieDetails
              imageUrl={selectedMovie.imageUrl}
              movieName={selectedMovie.movieName}
              releaseYear={selectedMovie.releaseYear}
              rating={selectedMovie.rating}
              duration={selectedMovie.duration}
              description={selectedMovie.description}
            />
            <button className={styles.headerButton} onClick={() => setSelectedMovie(null)}>
              Search
            </button>
          </>
        ) : (
          <>
            <SearchForm initialSearchQuery="" onSearch={(value) => setSearchQuery(value)} />
            <button className={styles.headerButton} onClick={() => setIsAddMovieDialogOpen(true)}>
              Add movie
            </button>
          </>
        )}
      </div>

      <div className={styles.movieListTile}>
        <div className={styles.filters}>
          <GenreSelect allGenres={genres} selectedGenre={selectedGenre} onSelect={(genre) => setSelectedGenre(genre)} />
          <SortControl selectedOption={selectedSortOption} onSelect={(value) => setSelectedSortOption(value)} />
        </div>

        <div className={styles.movieList}>
          {!!movies?.length &&
            movies.map((movieData) => (
              <MovieTile
                key={movieData.movieName + movieData.releaseYear}
                imageUrl={movieData.imageUrl}
                movieName={movieData.movieName}
                releaseYear={movieData.releaseYear}
                relevantGenres={movieData.genres}
                onClick={() => setSelectedMovie(movies.find((movie) => movie.movieName === movieData.movieName))}
              />
            ))}
        </div>
      </div>

      {isAddMovieDialogOpen && (
        <Dialog title="Add movie" onClose={() => setIsAddMovieDialogOpen(false)}>
          <MovieForm genres={genres} onSubmit={(value) => console.log(value)} />
        </Dialog>
      )}
    </div>
  );
}
