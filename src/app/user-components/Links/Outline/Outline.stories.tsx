import { Meta, StoryObj } from '@storybook/react';
import Outline, { type Props } from './Outline';

export default {
	component: Outline,
	title: 'UserComponents/Components/Links/Outline',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {
	args: {
		borderRadius: 'normal',
		bgColor: '#ff0000',
		textColor: '#000',
		href: 'https://github.com',
	},
};
