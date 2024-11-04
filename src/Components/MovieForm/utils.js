export const validateForm = (values) => {
  const errors = {};
  if (!values.title.length) {
    errors.title = 'Title is required';
  }
  if (!values.description.length) {
    errors.description = 'Description is required';
  }
  if (!values.genre.length) {
    errors.genre = 'Genre is required';
  }
  if (!values.releaseYear.length) {
    errors.releaseYear = 'Release date is required';
  } else if (!isValidDate(values.releaseYear)) {
    errors.releaseYear = 'Release date must be valid';
  }

  if (!values.imageUrl.length) {
    errors.imageUrl = 'Image URL is required';
  } else if (!isValidUrl(values.imageUrl)) {
    errors.imageUrl = 'Image URL must be valid URL';
  }

  if (values.rating > 10 || values.rating < 0) {
    errors.rating = 'Rating must be within 0-10 range';
  }

  return errors;
};

const isValidDate = (input) => {
  const date = new Date(input);
  return !isNaN(date.getTime()) && input === date.toISOString().slice(0, 10);
};
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};
