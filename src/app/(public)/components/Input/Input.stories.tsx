import { Meta, StoryObj } from '@storybook/react';
import Input, { Props } from './Input';
import { UseFormRegisterReturn } from 'react-hook-form';

type MockType = {
	test: string;
};

export default {
	component: Input,
	title: 'PublicPages/Components/Input',
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
		name: 'test',
		placeholder: 'Input text',
		type: 'text',
	},
};

export const PasswordInput: Story = {
	args: {
		name: 'test',
		placeholder: 'Password',
		type: 'password',
	},
};
