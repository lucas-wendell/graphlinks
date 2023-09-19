import { Meta, StoryObj } from '@storybook/react';
import ToggleButton, { Props } from './ToggleButton';

export default {
	component: ToggleButton,
	title: 'AdminPages/Components/ToggleButton',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
