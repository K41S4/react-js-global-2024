import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchForm } from '../SearchForm';

describe('SearchForm', () => {
  const initialSearchValue = 'Test Search';

  test('renders initial value', () => {
    render(<SearchForm initialSearchQuery={initialSearchValue} onSearch={jest.fn()} />);

    expect(screen.getByRole('textbox')).toHaveValue(initialSearchValue);
  });

  test('calls onSearch calllback with proper value when search button is clicked', async () => {
    const onSearchMock = jest.fn();
    const user = userEvent.setup();
    const userInputValue = 'input text';

    render(<SearchForm initialSearchQuery={initialSearchValue} onSearch={onSearchMock} />);
    await user.type(screen.getByRole('textbox'), userInputValue);
    await user.click(screen.getByRole('button', { name: 'Search' }));

    expect(onSearchMock).toHaveBeenCalledWith(`${initialSearchValue}${userInputValue}`);
  });

  test('calls onSearch callback with proper value when enter key is pressed', async () => {
    const onSearchMock = jest.fn();
    const user = userEvent.setup();
    const userInputValue = `input text`;

    render(<SearchForm initialSearchQuery={initialSearchValue} onSearch={onSearchMock} />);
    await user.type(screen.getByRole('textbox'), `${userInputValue}{enter}`);

    expect(onSearchMock).toHaveBeenCalledWith(`${initialSearchValue}${userInputValue}`);
  });
});
