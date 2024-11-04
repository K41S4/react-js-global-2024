import { render, screen } from '@testing-library/react';
import { SearchForm } from '../SearchForm';
import { MemoryRouter } from 'react-router-dom';

describe('SearchForm', () => {
  test('renders initial value', () => {
    const initialSearchValue = 'TestSearch';
    render(
      <MemoryRouter initialEntries={[`/?query=${initialSearchValue}`]}>
        <SearchForm />
      </MemoryRouter>
    );

    expect(screen.getByRole('textbox')).toHaveValue(initialSearchValue);
  });
});
