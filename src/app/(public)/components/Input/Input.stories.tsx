import { Meta, StoryObj } from '@storybook/react';
import Input, { Props } from './Input';

type MockType = {
	test: string;
};

export default {
	component: Input,
	title: 'Form/Input',
	tags: ['autodocs'],
	argTypes: {
		type: {
			options: ['text', 'password'],
			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<Props<MockType>>;

type Story = StoryObj<Props<MockType>>;

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
