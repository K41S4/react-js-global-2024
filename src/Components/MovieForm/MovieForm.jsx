import styles from './MovieForm.module.css';
import { LabeledInput } from './LabeledInput/LabeledInput';
import { formGenres } from '../../constants';
import { Formik } from 'formik';

const defaultMovieValues = {
  title: '',
  releaseYear: '',
  imageUrl: '',
  rating: '',
  genre: '',
  runtime: '',
  description: '',
};

export const MovieForm = ({ initialValues = defaultMovieValues, onSubmit }) => {
  const validateForm = (values) => {
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

  return (
    <Formik
      initialValues={{ ...defaultMovieValues, ...initialValues }}
      validate={validateForm}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm }) => (
        <form className={styles.container} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <LabeledInput
                label="Title"
                onChange={handleChange}
                value={values.title}
                id="title"
                handleBlur={handleBlur}
              />
              <span className={styles.error}>{errors.title && touched.title && errors.title}</span>
            </div>
            <div className={styles.formGroup}>
              <LabeledInput
                label="Release Date"
                onChange={handleChange}
                value={values.releaseYear}
                id="releaseYear"
                handleBlur={handleBlur}
              />
              <span className={styles.error}>{errors.releaseYear && touched.releaseYear && errors.releaseYear}</span>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <LabeledInput
                label="Image Url"
                onChange={handleChange}
                value={values.imageUrl}
                id="imageUrl"
                handleBlur={handleBlur}
              />
              <span className={styles.error}>{errors.imageUrl && touched.imageUrl && errors.imageUrl}</span>
            </div>
            <div className={styles.formGroup}>
              <LabeledInput
                label="Rating"
                onChange={handleChange}
                value={values.rating}
                id="rating"
                handleBlur={handleBlur}
                type="number"
              />
              <span className={styles.error}>{errors.rating && touched.rating && errors.rating}</span>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="genre">
                Genre
              </label>
              <select className={styles.select} id="genre" name="genre" value={values.genre} onChange={handleChange}>
                <option hidden />
                {!!formGenres?.length &&
                  formGenres.map((genre) => (
                    <option key={genre.value} value={genre.value}>
                      {genre.label}
                    </option>
                  ))}
              </select>
              <span className={styles.error}>{errors.genre && touched.genre && errors.genre}</span>
            </div>
            <div className={styles.formGroup}>
              <LabeledInput
                label="Runtime"
                onChange={handleChange}
                value={values.runtime}
                id="runtime"
                handleBlur={handleBlur}
                type="number"
              />
              <span className={styles.error}>{errors.runtime && touched.runtime && errors.runtime}</span>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.label}>
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className={styles.overviewTextarea}
              rows="4"
              value={values.description}
              onChange={handleChange}
            />
            <span className={styles.error}>{errors.description && touched.description && errors.description}</span>
          </div>

          <div className={styles.formActions}>
            <button className={styles.resetButton} type="reset" onClick={resetForm}>
              Reset
            </button>
            <button className={styles.submitButton} type="submit">
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};
