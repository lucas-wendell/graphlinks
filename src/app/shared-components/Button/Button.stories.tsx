import { Meta, StoryObj } from '@storybook/react';
import Button, { Props } from './Button';
import { FaGoogle } from 'react-icons/fa';

export default {
	component: Button,
	title: 'SharedComponents/Components/Button',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {
	args: {
		styleType: 'primary',
		disabled: false,
		text: 'Login',
		onClick: () => console.log('click!'),
	},
};
export const Secondary: Story = {
	args: {
		styleType: 'secondary',
		disabled: false,
		text: 'Log In With Google',
		icon: { icon: FaGoogle },
		onClick: () => console.log('click!'),
	},
};
