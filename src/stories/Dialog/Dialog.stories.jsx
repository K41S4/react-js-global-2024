import { fn } from '@storybook/test';

import { Dialog } from '../../Components/Dialog/Dialog';

export default {
  title: 'Example/Dialog',
  component: Dialog,
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
    children: <div>Child element</div>,
  },
};
