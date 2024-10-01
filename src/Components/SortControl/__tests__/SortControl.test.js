import { render, screen } from '@testing-library/react';
import { SortControl } from '../SortControl';
import userEvent from '@testing-library/user-event';

describe('SortControl', () => {
  test('renders all options', () => {
    render(<SortControl selectedOption={''} onSelect={jest.fn()} />);

    expect(screen.getAllByRole('option')).toHaveLength(2);
    expect(screen.getByRole('option', { name: 'Title' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Release Date' })).toBeInTheDocument();
  });

  test('renders selected value', () => {
    const selectedOption = 'title';

    render(<SortControl selectedOption={selectedOption} onSelect={jest.fn()} />);

    expect(screen.getByRole('combobox')).toHaveValue(selectedOption);
  });

  test('calls callback on option select', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();

    render(<SortControl selectedOption={'releaseDate'} onSelect={onSelect} />);

    await user.selectOptions(screen.getByRole('combobox'), 'title');
    expect(onSelect).toHaveBeenCalledWith('title');
  });
});
