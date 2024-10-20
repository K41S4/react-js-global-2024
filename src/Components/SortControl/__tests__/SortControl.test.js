import { render, screen } from '@testing-library/react';
import { SortControl } from '../SortControl';
import userEvent from '@testing-library/user-event';
import { sortOptions } from '../../../constants';

describe('SortControl', () => {
  test('renders all options', () => {
    render(<SortControl selectedOption="" onSelect={jest.fn()} />);

    expect(screen.getAllByRole('option')).toHaveLength(sortOptions.length);

    sortOptions.forEach((option) => {
      expect(screen.getByRole('option', { name: option.label })).toBeInTheDocument();
    });
  });

  test('renders selected value', () => {
    const selectedOption = 'title';

    render(<SortControl selectedOption={selectedOption} onSelect={jest.fn()} />);

    expect(screen.getByRole('combobox')).toHaveValue(selectedOption);
  });

  test('calls callback on option select', async () => {
    const user = userEvent.setup();
    const onSelectMock = jest.fn();

    render(<SortControl selectedOption="releaseDate" onSelect={onSelectMock} />);

    await user.selectOptions(screen.getByRole('combobox'), 'title');
    expect(onSelectMock).toHaveBeenCalledWith('title');
  });
});
