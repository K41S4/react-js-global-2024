import { fn } from '@storybook/test';
import styles from './Composition.module.css';

import { Dialog } from '../../Components/Dialog/Dialog';

const DeleteMovie = ({ onConfirm, onClose }) => (
  <Dialog title={'Delete movie'} onClose={onClose}>
    <div className={styles.confirmationText}>Are you sure?</div>
    <button onClick={onConfirm}>Confirm</button>
  </Dialog>
);

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
    onClose: fn(),
  },
};

export const DeleteMovieStory = {
  args: {},
};
