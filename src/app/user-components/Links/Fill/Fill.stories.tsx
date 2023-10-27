import { Meta, StoryObj } from '@storybook/react';
import Fill, { type Props } from './Fill';

export default {
	component: Fill,
	title: 'UserComponents/Components/Links/Fill',
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
