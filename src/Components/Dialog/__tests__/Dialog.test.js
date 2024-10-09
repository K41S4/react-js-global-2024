import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog } from '../Dialog';

describe('Dialog', () => {
  test('renders all details', () => {
    const title = 'Title test';
    const children = 'children test';

    render(
      <Dialog title={title} onClose={jest.fn()}>
        <button>{children}</button>
      </Dialog>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: children })).toBeInTheDocument();
  });

  test('handles close event with calling callback', async () => {
    const user = userEvent.setup();
    const onCloseMock = jest.fn();

    render(<Dialog onClose={onCloseMock} />);

    await user.click(screen.getByRole('button', { name: 'x' }));

    expect(onCloseMock).toHaveBeenCalled();
  });
});
