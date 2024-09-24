import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { SearchForm } from '../SearchForm';

describe('SearchForm tests', () => {
  const initialSearchValue = 'Test Search';
  const onSearchMock = jest.fn();

  test('initial value is rendered correctly', async () => {
    // Arrange
    // Act
    render(<SearchForm initialSearchQuery={initialSearchValue} onSearch={onSearchMock} />);

    // Assert
    expect(screen.getByRole('textbox')).toHaveValue(initialSearchValue);
  });

  test('onSearch calllback is called with proper value when search button is clicked', async () => {
    // Arrange
    const user = userEvent.setup();
    const userInputValue = 'input text';

    // Act
    render(<SearchForm initialSearchQuery={initialSearchValue} onSearch={onSearchMock} />);
    await user.type(screen.getByRole('textbox'), userInputValue);
    await user.click(screen.getByRole('button', { name: 'Search' }));

    // Assert
    expect(onSearchMock).toHaveBeenCalledWith(`${initialSearchValue}${userInputValue}`);
  });

  test('onSearch calllback is called with proper value when enter key is pressed', async () => {
    // Arrange
    const user = userEvent.setup();
    const userInputValue = `input text`;

    // Act
    render(<SearchForm initialSearchQuery={initialSearchValue} onSearch={onSearchMock} />);
    await user.type(screen.getByRole('textbox'), `${userInputValue}{enter}`);

    // Assert
    expect(onSearchMock).toHaveBeenCalledWith(`${initialSearchValue}${userInputValue}`);
  });
});
