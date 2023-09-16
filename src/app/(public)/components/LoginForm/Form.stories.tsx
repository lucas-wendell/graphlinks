import { Meta, StoryObj } from '@storybook/react';
import LoginForm from './Form';

export default {
	component: LoginForm,
	title: 'PublicPages/Components/LoginForm',
	tags: ['autodocs'],
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta;

type Story = StoryObj;

export const Primary: Story = {};
