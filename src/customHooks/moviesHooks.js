import { useEffect, useState } from 'react';
import { fetchMovies } from '../requests/requests';

export const useFetchMovies = (searchQuery, selectedSortOption, selectedGenre) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchMovies(searchQuery, selectedSortOption, selectedGenre, controller);
      setMovies(movies);
    };

    const controller = new AbortController();

    fetchData();

    return () => {
      controller.abort();
    };
  }, [searchQuery, selectedSortOption, selectedGenre]);

  return movies;
};
