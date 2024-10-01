import { fn } from '@storybook/test';

import { SearchForm } from '../../Components/SearchForm/SearchForm';

export default {
  title: 'Example/SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  args: {
    onSearch: fn(),
  },
};

export const SearchFormDefault = {
  args: {
    initialSearchQuery: 'All',
  },
};
