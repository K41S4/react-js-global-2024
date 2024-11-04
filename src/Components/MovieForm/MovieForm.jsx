import styles from './MovieForm.module.css';
import { LabeledInput } from './LabeledInput/LabeledInput';
import { formGenres } from '../../constants';
import { Formik } from 'formik';
import { validateForm } from './utils';

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
                {formGenres?.map((genre) => (
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
