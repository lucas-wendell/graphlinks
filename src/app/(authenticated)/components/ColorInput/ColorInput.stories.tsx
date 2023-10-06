import { Meta, StoryObj } from '@storybook/react';
import ColorInput, { type Props } from './ColorInput';

export default {
	component: ColorInput,
	title: 'AdminPages/Components/ColorInput',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {};
