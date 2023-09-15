import { Meta, StoryObj } from '@storybook/react';
import RecoveryCodeForm from './Form';

export default {
	component: RecoveryCodeForm,
	title: 'PublicPages/Components/RecoveryCodeForm',
	tags: ['autodocs'],
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} as Meta;

type Story = StoryObj;

export const Primary: Story = {};
