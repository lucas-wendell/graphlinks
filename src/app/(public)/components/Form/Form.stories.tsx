import { Meta, StoryObj } from '@storybook/react';
import Form from './Form';

export default {
	component: Form,
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
