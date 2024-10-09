import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../Counter';

describe('Counter', () => {
  test('renders initial value', () => {
    const initialValue = 5;

    render(<Counter initialValue={initialValue} />);

    expect(screen.getByText(initialValue)).toBeInTheDocument();
  });

  test('increments counter on increment button click', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={5} />);

    await user.click(screen.getByRole('button', { name: 'Increment' }));

    expect(screen.getByText(6)).toBeInTheDocument();
  });

  test('decrements counter on decrement button click', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={5} />);

    await user.click(screen.getByRole('button', { name: 'Decrement' }));

    expect(screen.getByText(4)).toBeInTheDocument();
  });
});
