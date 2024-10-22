import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog } from '../Dialog';

describe('Dialog', () => {
  test('renders all details', () => {
    const title = 'Title test';
    const childButtonText = 'children test';

    render(
      <Dialog title={title} onClose={jest.fn()}>
        <button>{childButtonText}</button>
      </Dialog>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: childButtonText })).toBeInTheDocument();
  });

  test('calls close callback on close button click', async () => {
    const user = userEvent.setup();
    const onCloseMock = jest.fn();

    render(<Dialog onClose={onCloseMock} />);

    await user.click(screen.getByRole('button', { name: 'x' }));

    expect(onCloseMock).toHaveBeenCalled();
  });
});
