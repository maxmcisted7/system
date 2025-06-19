import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '../components/src/ui/spinner/Spinner';

const meta = {
  title: 'Design System/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}; 