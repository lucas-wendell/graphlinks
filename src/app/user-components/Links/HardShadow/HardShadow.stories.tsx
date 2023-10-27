import { Meta, StoryObj } from '@storybook/react';
import HardShadow, { type Props } from './HardShadow';

export default {
	component: HardShadow,
	title: 'UserComponents/Components/Links/HardShadow',
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
