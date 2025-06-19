import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../components/src/ui/checkbox/Checkbox';
import React, { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const CheckboxDemo = (args: any) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)}>
      Checkbox
    </Checkbox>
  );
};

export const Default: Story = {
  render: CheckboxDemo,
}; 