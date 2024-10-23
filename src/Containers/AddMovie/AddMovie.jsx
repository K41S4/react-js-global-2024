import { useState } from 'react';
import { Dialog } from '../../Components/Dialog/Dialog';
import { MovieForm } from '../../Components/MovieForm/MovieForm';
import styles from './AddMovie.module.css';
import { genres } from '../../constants';

export const AddMovie = () => {
  const [isAddMovieDialogOpen, setIsAddMovieDialogOpen] = useState(false);

  return (
    <>
      <button className={styles.headerButton} onClick={() => setIsAddMovieDialogOpen(true)}>
        Add movie
      </button>
      {isAddMovieDialogOpen && (
        <Dialog title="Add movie" onClose={() => setIsAddMovieDialogOpen(false)}>
          <MovieForm genres={genres} onSubmit={(value) => console.log(value)} />
        </Dialog>
      )}
    </>
  );
};
