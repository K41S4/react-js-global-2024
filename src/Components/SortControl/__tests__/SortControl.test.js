import { render, screen } from '@testing-library/react';
import { SortControl } from '../SortControl';
import { sortOptions } from '../../../constants';
import { renderWithRouter } from '../../../testUtils';
import { MemoryRouter } from 'react-router-dom';

describe('SortControl', () => {
  test('renders all options', () => {
    renderWithRouter(<SortControl />);

    expect(screen.getAllByRole('option')).toHaveLength(sortOptions.length);

    sortOptions.forEach((option) => {
      expect(screen.getByRole('option', { name: option.label })).toBeInTheDocument();
    });
  });

  test('renders selected value', () => {
    const selectedOption = 'title';

    render(
      <MemoryRouter initialEntries={[`/?sortBy=${selectedOption}`]}>
        <SortControl />
      </MemoryRouter>
    );
    expect(screen.getByRole('combobox')).toHaveValue(selectedOption);
  });
});
