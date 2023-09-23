import { Meta, StoryObj } from '@storybook/react';
import LinkInput, { Props } from './LinkInput';

export default {
	component: LinkInput,
	title: 'AdminPages/Components/LinkInput',
	tags: ['autodocs'],
} as Meta<Props<{}>>;

type Story = StoryObj<Props<{}>>;

export const Primary: Story = {};

export const WithError: Story = {
	args: {
		error: 'Error',
	},
};
