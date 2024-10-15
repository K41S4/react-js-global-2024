import { useState } from 'react';
import styles from './MovieForm.module.css';
import { LabeledInput } from './LabeledInput/LabeledInput';

export const MovieForm = ({ initialValues = {}, onSubmit, genres }) => {
  const [movie, setMovie] = useState({
    title: initialValues?.title ?? '',
    releaseDate: initialValues?.releaseDate ?? '',
    imageUrl: initialValues?.imageUrl ?? '',
    rating: initialValues?.rating ?? '',
    genre: initialValues?.genre ?? '',
    runtime: initialValues?.runtime ?? '',
    description: initialValues?.description ?? '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleReset = () => {
    setMovie({
      title: '',
      releaseDate: '',
      imageUrl: '',
      rating: '',
      genre: '',
      runtime: '',
      description: '',
    });
  };

  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        onSubmit(formData);
      }}
    >
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <LabeledInput label={'Title'} onChange={handleChange} value={movie.title} id={'title'} />
        </div>
        <div className={styles.formGroup}>
          <LabeledInput label={'Release Date'} onChange={handleChange} value={movie.releaseDate} id={'releaseDate'} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <LabeledInput label={'Image Url'} onChange={handleChange} value={movie.imageUrl} id={'imageUrl'} />
        </div>
        <div className={styles.formGroup}>
          <LabeledInput label={'Rating'} onChange={handleChange} value={movie.rating} id={'rating'} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor={'genres'}>
            Genre
          </label>
          <select className={styles.select} id={'genres'} name="genre" defaultValue={movie.genre}>
            <option hidden></option>
            {!!genres?.length &&
              genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <LabeledInput label={'Runtime'} onChange={handleChange} value={movie.runtime} id={'runtime'} />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.overviewLabel}>
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className={styles.overviewTextarea}
          rows="4"
          value={movie.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className={styles.formActions}>
        <button className={styles.resetButton} type="reset" onClick={handleReset}>
          Reset
        </button>
        <button className={styles.submitButton}>Submit</button>
      </div>
    </form>
  );
};
