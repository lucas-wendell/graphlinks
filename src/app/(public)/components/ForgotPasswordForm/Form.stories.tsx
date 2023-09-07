import { Meta, StoryObj } from '@storybook/react';
import ForgotPasswordForm from './Form';

export default {
	component: ForgotPasswordForm,
	title: 'PublicPages/Components/ForgotPasswordForm',
	tags: ['autodocs'],
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta;

type Story = StoryObj;

export const Primary: Story = {};
