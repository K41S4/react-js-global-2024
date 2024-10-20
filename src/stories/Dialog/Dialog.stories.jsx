import styles from './Dialog.module.css';
import { fn } from '@storybook/test';

import { Dialog } from '../../Components/Dialog/Dialog';
import { useState } from 'react';

const DialogWrap = ({ title, children }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDialogOpen(true)}>Open dialog</button>
      {isDialogOpen && (
        <Dialog title={title} onClose={() => setIsDialogOpen(false)}>
          {children}
        </Dialog>
      )}
    </div>
  );
};

export default {
  title: 'Example/Dialog',
  component: DialogWrap,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  args: {
    onClose: fn(),
  },
};

export const DialogDefault = {
  args: {
    title: 'Title',
    children: <div className={styles.text}>Child element</div>,
  },
};
