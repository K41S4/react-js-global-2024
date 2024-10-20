import { fn } from '@storybook/test';
import styles from './MovieFormComposition.module.css';

import { Dialog } from '../../Components/Dialog/Dialog';
import { useState } from 'react';

const DeleteMovie = ({ onConfirm }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDialogOpen(true)}>Open dialog</button>
      {isDialogOpen && (
        <Dialog title="Delete movie" onClose={() => setIsDialogOpen(false)}>
          <div className={styles.confirmationText}>Are you sure?</div>
          <button className={styles.confirmButton} onClick={onConfirm}>
            Confirm
          </button>
        </Dialog>
      )}
    </div>
  );
};

export default {
  title: 'Composition/DeleteMovie',
  component: DeleteMovie,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  args: {
    onSubmit: fn(),
  },
};

export const DeleteMovieStory = {
  args: {},
};
