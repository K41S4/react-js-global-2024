import React, { useState } from "react";
import './App.css';
import { Counter } from './Components/Counter/Counter';
import { GenreSelect } from './Components/GenreSelect/GenreSelect';
import { SearchForm } from './Components/SearchForm/SearchForm';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const genres = ['All', 'Comedy', 'Horror', 'Crime'];

  return (
    <div className="App">

      <div>
        <Counter initialValue={3} />
      </div>

      <div>
        <SearchForm initialSearchQuery={'Initial search'} onSearch={(value) => console.log(value)}/>
      </div>
      
      <div>
        <GenreSelect allGenres={genres} selectedGenre={selectedGenre} onSelect={(genre) => setSelectedGenre(genre)}/>
      </div>
    </div>
  );
}

export default App;
