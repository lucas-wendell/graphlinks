import { Meta, StoryObj } from '@storybook/react';
import Button, { Props } from './Button';
import { faEarth } from '@fortawesome/free-solid-svg-icons';

export default {
	component: Button,
	title: 'Form/Button',
	tags: ['autodocs'],
} as Meta<Props>;

type Story = StoryObj<Props>;

export const Primary: Story = {
	args: {
		type: 'primary',
		disabled: false,
		text: 'Login',
		onClick: () => console.log('click!'),
	},
};
export const Secondary: Story = {
	args: {
		type: 'secondary',
		disabled: false,
		text: 'Log In With Google',
		icon: faEarth,
		onClick: () => console.log('click!'),
	},
};
