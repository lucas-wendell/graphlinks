import { Meta, StoryObj } from '@storybook/react';
import Input, { Props } from './Input';

export default {
	component: Input,
	title: 'Form/Input',
	tags: ['autodocs'],
	args: {
		placeholder: 'Text Input',
		type: 'text',
	},
	argTypes: {
		type: {
			options: ['text', 'password'],
			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<Props>;

type Story = StoryObj<Props>;

export const TextInput: Story = {
	args: {
		placeholder: 'Input text',
		type: 'text',
	},
};

export const PasswordInput: Story = {
	args: {
		placeholder: 'Password',
		type: 'password',
	},
};
