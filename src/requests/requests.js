import axios from 'axios';

export const fetchMovies = async (searchQuery, selectedSortOption, selectedGenre, controller) => {
  try {
    const response = await axios.get(`http://localhost:4000/movies`, {
      params: {
        searchBy: 'title',
        search: searchQuery,
        sortBy: selectedSortOption,
        sortOrder: 'asc',
        filter: selectedGenre === 'All' ? '' : selectedGenre,
      },
      signal: controller.signal,
    });

    const mappedMovies = response.data.data.map((data) => ({
      movieName: data.title,
      rating: data.vote_average,
      imageUrl: data.poster_path,
      releaseYear: data.release_date,
      duration: data.runtime,
      description: data.overview,
      genres: data.genres,
    }));

    return mappedMovies;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error('Axios fetch error:', error);
    }
  }
};
