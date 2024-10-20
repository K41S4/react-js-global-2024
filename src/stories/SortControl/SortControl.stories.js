import { fn } from '@storybook/test';

import { SortControl } from '../../Components/SortControl/SortControl';

export default {
  title: 'Example/SortControl',
  component: SortControl,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  args: {
    onSelect: fn(),
  },
};

export const SortControlDefault = {
  args: {
    selectedOption: 'releaseDate',
  },
};
