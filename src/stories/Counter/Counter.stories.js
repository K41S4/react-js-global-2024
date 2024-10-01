import { Counter } from '../../Components/Counter/Counter';

export default {
  title: 'Example/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const CounterDefault = {
  args: {
    initialValue: 5,
  },
};
