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
      signal: controller?.signal,
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

export const createMovie = async (params) => {
  const response = await api.post('/movies', {
    title: params.title,
    vote_average: Number(params.rating),
    release_date: params.releaseYear,
    poster_path: params.imageUrl,
    overview: params.description,
    runtime: Number(params.runtime),
    genres: [params.genre],
  });

  return response.data.id;
};

export const updateMovie = async (params) => {
  const response = await api.put('/movies', {
    id: Number(params.id),
    title: params.title,
    vote_average: Number(params.rating),
    release_date: params.releaseYear,
    poster_path: params.imageUrl,
    overview: params.description,
    runtime: Number(params.runtime),
    genres: [params.genre],
  });

  return response.data.id;
};

export const movieMapper = (data) => {
  return {
    id: data.id,
    title: data.title,
    rating: data.vote_average,
    imageUrl: data.poster_path,
    releaseYear: data.release_date,
    runtime: data.runtime,
    description: data.overview,
    genres: data.genres,
  };
};
