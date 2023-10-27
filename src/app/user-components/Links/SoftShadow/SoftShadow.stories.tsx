import { Meta, StoryObj } from '@storybook/react';
import SoftShadow, { type Props } from './SoftShadow';

export default {
	component: SoftShadow,
	title: 'UserComponents/Components/Links/SoftShadow',
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
