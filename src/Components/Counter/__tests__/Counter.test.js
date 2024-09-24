import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Counter } from '../Counter';

describe('Counter tests', () => {
  const initialValue = 5;

  test('initial value is rendered correctly', async () => {
    // Arrange
    // Act
    render(<Counter initialValue={initialValue} />);

    // Assert
    expect(await screen.findByTestId('counter-div')).toHaveTextContent(initialValue);
  });

  test('increment button is handled correctly', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Counter initialValue={initialValue} />);

    // Act
    await user.click(screen.getByRole('button', { name: 'Increment' }));

    // Assert
    expect(screen.getByTestId('counter-div')).toHaveTextContent(initialValue + 1);
  });

  test('decrement button is handled correctly', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Counter initialValue={initialValue} />);

    // Act
    await user.click(screen.getByRole('button', { name: 'Decrement' }));

    // Assert
    expect(screen.getByTestId('counter-div')).toHaveTextContent(initialValue - 1);
  });
});
