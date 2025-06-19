import type { Meta, StoryObj } from '@storybook/react-vite';
import { Listbox } from '../components/src/ui/listbox/Listbox';
import React, { useState } from 'react';

const meta: Meta<typeof Listbox> = {
  title: 'Design System/Listbox',
  component: Listbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Listbox>;

const items = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

const ListboxDemo = (args: any) => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <Listbox
      {...args}
      selected={selected}
      onChange={setSelected}
      items={items}
      placeholder="Select an option"
    />
  );
};

export const Default: Story = {
  render: ListboxDemo,
}; 