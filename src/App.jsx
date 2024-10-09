import { useState } from 'react';
import { Counter } from './Components/Counter/Counter';
import { GenreSelect } from './Components/GenreSelect/GenreSelect';
import { SearchForm } from './Components/SearchForm/SearchForm';
import { movieData, sortOptions } from './constants';
import { MovieDetails } from './Components/MovieDetails/MovieDetails';
import { MovieTile } from './Components/MovieTile/MovieTile';
import styles from './App.module.css';
import { SortControl } from './Components/SortControl/SortControl';
import { Dialog } from './Components/Dialog/Dialog';
import { MovieForm } from './Components/MovieForm/MovieForm';

export function App() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const genres = ['All', 'Comedy', 'Horror', 'Crime'];

  const [selectSortOptions, setSelectedSortOption] = useState(sortOptions[0].value);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div>
        <Counter initialValue={3} />
      </div>

      <div>
        <SearchForm initialSearchQuery="Initial search" onSearch={(value) => console.log(value)} />
      </div>

      <div>
        <GenreSelect allGenres={genres} selectedGenre={selectedGenre} onSelect={(genre) => setSelectedGenre(genre)} />
      </div>

      <div>
        <MovieDetails
          imageUrl={movieData.imageUrl}
          movieName={movieData.movieName}
          releaseYear={movieData.releaseYear}
          rating={movieData.rating}
          duration={movieData.duration}
          description={movieData.description}
        />
      </div>

      <div>
        <MovieTile
          imageUrl={movieData.imageUrl}
          movieName={movieData.movieName}
          releaseYear={movieData.releaseYear}
          relevantGenres={movieData.relevantGenres}
          onClick={() => console.log('click')}
        />
      </div>

      <div>
        <button onClick={() => setIsDialogOpen(true)}>Open dialog</button>
        {isDialogOpen && (
          <Dialog title={'Title'} onClose={() => setIsDialogOpen(false)}>
            <MovieForm genres={genres} onSubmit={() => {}} />
          </Dialog>
        )}
      </div>

      <div>
        <SortControl selectedOption={selectSortOptions} onSelect={(value) => setSelectedSortOption(value)} />
      </div>
    </div>
  );
}
