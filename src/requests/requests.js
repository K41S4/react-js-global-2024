import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export const fetchMovies = async (searchQuery, selectedSortOption, selectedGenre, controller) => {
  try {
    const response = await api.get('/movies', {
      params: {
        searchBy: 'title',
        search: searchQuery,
        sortBy: selectedSortOption,
        sortOrder: 'asc',
        filter: selectedGenre,
      },
      signal: controller.signal,
    });

    const mappedMovies = response.data.data.map(movieMapper);

    return mappedMovies;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error('Axios fetch error:', error);
    }
  }
};

export const fetchMovie = async (movieId) => {
  const response = await api.get(`/movies/${movieId}`);

  const mappedMovie = movieMapper(response.data);
  return mappedMovie;
};

export const movieMapper = (data) => {
  return {
    movieId: data.id,
    movieName: data.title,
    rating: data.vote_average,
    imageUrl: data.poster_path,
    releaseYear: data.release_date,
    duration: data.runtime,
    description: data.overview,
    genres: data.genres,
  };
};
